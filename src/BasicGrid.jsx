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
          <Grid item xs={5}>
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

                {/* <p>Club info:</p>
                <h3>{club.team_name}</h3>
                <h2> Founded: {club.team_founded}</h2>
                <h3>Venue: {club.venue.venue_name}</h3> */}
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
            <Grid item xs={7}>
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
                          <div className="LeagueBar">
                            <img
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                handleShowTable(match.league_id);
                                console.log(match.league_id);
                              }}
                              src={match.league_logo}
                              alt={match.league_name}
                              className="LeagueLogo"
                            />
                            <p>
                              {match.league_name} - Round {match.match_round}
                            </p>
                          </div>
                          <div className="ClubVsClub">
                            <h1>
                              <img src={match.team_home_badge} alt="" />
                              {match.match_hometeam_name}{" "}
                              {match.match_hometeam_score}-
                              {match.match_awayteam_score}{" "}
                              {match.match_awayteam_name}{" "}
                              <img src={match.team_away_badge} alt="" />
                            </h1>
                            <h2>
                              {match.match_date} - {match.match_time}
                            </h2>
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
            <Grid item xs={7}>
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
