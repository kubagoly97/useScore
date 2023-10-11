import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BasicDateCalendar from "./BasicDateCalendar";
import { useEffect, useState } from "react";
import LeagueTable from "./LeagueTable";
import Stack from "@mui/material/Stack";
import TeamInfoCard from "./TeamInfoCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid({
  value,
  setValue,
  club,
  matchesData,
  setMatchesData,
  setYourClubsList,
  yourClubsList,
}) {
  const [showTable, setShowTable] = useState(false);
  const [table, setTable] = useState({});

  const handleShowTable = async (key) => {
    setShowTable(true);
    const url = `https://apiv3.apifootball.com/?action=get_standings&league_id=${key}&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJSON = await res.json();
    setTable(resJSON);
  };

  useEffect(() => {
    async function fetchDetails() {
      const res = await fetch(
        `https://apiv3.apifootball.com/?action=get_events&from=2023-01-01&to=2024-12-31&team_id=${
          club.team_key
        }&APIkey=${import.meta.env.VITE_API_KEY}`
      );
      const resJSON = await res.json();
      setMatchesData(resJSON);
    }
    fetchDetails();
  }, []);

  useEffect(() => {
    document.title = `useScore - ${club.team_name}`;
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <Stack spacing={2}>
              <Item
                sx={{
                  backgroundColor: " #04471C",
                  border: "2px dashed #0D2818",
                }}
              >
                <TeamInfoCard
                  yourClubsList={yourClubsList}
                  club={club}
                  setYourClubsList={setYourClubsList}
                />
              </Item>
              <Item
                sx={{
                  backgroundColor: " #04471C",
                  border: "2px dashed #0D2818",
                }}
              >
                <>
                  <BasicDateCalendar
                    value={value}
                    setValue={setValue}
                    matchesData={matchesData}
                    setMatchesData={setMatchesData}
                    setShowTable={setShowTable}
                  />
                </>
              </Item>
            </Stack>
          </Grid>
          {!showTable ? (
            <Grid item xs={12} sm={7}>
              <Item
                sx={{
                  backgroundColor: " #04471C",
                  border: "2px dashed #0D2818",
                }}
              >
                {matchesData.length &&
                  matchesData.map(
                    (match, i) =>
                      value == match.match_date && (
                        <div className="GameDetails" key={i}>
                          <div className="ClubVsClub">
                            <section
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                fontFamily: "sans-serif",
                                borderRadius: "3px",
                              }}
                            >
                              <img
                                onClick={() => {
                                  handleShowTable(match.league_id);
                                  console.log(match.league_id);
                                }}
                                style={{
                                  maxWidth: "25%",
                                  maxHeight: "50px",
                                  borderRadius: "3px",
                                  cursor: "pointer",
                                }}
                                src={match.league_logo}
                                alt={match.league_logo}
                              />
                              <div style={{ paddingLeft: "10px" }}>
                                <p>
                                  {match.league_name} - {match.match_round}.
                                  round - {match.match_date} {match.match_time}
                                </p>
                              </div>
                            </section>
                            <h1>
                              {match.match_hometeam_name} -{" "}
                              {match.match_awayteam_name}
                            </h1>
                            <Box
                              sx={{
                                textAlign: "left",
                                paddingRight: "none",
                                width: "100%",
                              }}
                            >
                              <img
                                src={match.team_home_badge}
                                alt={match.team_home_badge}
                                style={{
                                  borderRadius: "2px",
                                  paddingLeft: "60px",
                                }}
                              />
                              <img
                                style={{
                                  textAlign: "right",
                                  float: "right",
                                  borderRadius: "2px",
                                  paddingRight: "60px",
                                }}
                                src={match.team_away_badge}
                                alt={match.team_away_badge}
                              />
                            </Box>
                            <h1>
                              {" "}
                              {match.match_hometeam_score}:
                              {match.match_awayteam_score}{" "}
                            </h1>
                            <h3>{match.match_stadium}</h3>
                            <h4>
                              Referee:{" "}
                              {match.match_referee
                                ? match.match_referee
                                : "More details before the game"}
                            </h4>
                          </div>
                        </div>
                      )
                  )}
              </Item>
            </Grid>
          ) : (
            <Grid item xs={12} sm={7}>
              <Item
                sx={{
                  backgroundColor: "#04471C",
                  border: "2px dashed #0D2818",
                }}
              >
                <LeagueTable table={table} club={club} />
              </Item>
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
}
