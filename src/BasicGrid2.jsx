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
import { Scorers } from "./Scorers";
import { LeagueDetailsInMatchComponent } from "./LeagueDetailsInMatchComponent";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from "@mui/material/Tooltip";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid2({
  value,
  setValue,
  setYourClubsList,
  yourClubsList,
  matchesData,
  setMatchesData,
  setYourFollowingMatches,
  yourFollowingMatches,
}) {
  const [showTable, setShowTable] = useState(false);
  const [table, setTable] = useState({});
  const [clubInfo, setClubInfo] = useState([]);

  let { id } = useParams();

  const handleShowTable = async (key) => {
    setShowTable(true);
    const url = `https://apiv3.apifootball.com/?action=get_standings&league_id=${key}&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJSON = await res.json();
    setTable(resJSON);
  };

  const handleFetch = async (matchId) => {
    const res = await fetch(
      `https://apiv3.apifootball.com/?action=get_events&match_id=${matchId}&APIkey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const resJSON = await res.json();
    setYourFollowingMatches([...yourFollowingMatches, resJSON[0]]);
  };

  useEffect(() => {
    async function fetchClubInfo() {
      const res = await fetch(
        `https://apiv3.apifootball.com/?action=get_teams&team_id=${id}&APIkey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const resJson = await res.json();
      setClubInfo(resJson);
      document.title = `useScore - ${resJson[0].team_name}`;
    }
    fetchClubInfo();
  }, []);

  useEffect(() => {
    async function fetchDetails() {
      const res = await fetch(
        `https://apiv3.apifootball.com/?action=get_events&from=2023-01-01&to=2024-12-31&team_id=${id}&APIkey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const resJSON = await res.json();
      setMatchesData(resJSON);
    }
    fetchDetails();
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
                {clubInfo.length && (
                  <TeamInfoCard
                    yourClubsList={yourClubsList}
                    club={clubInfo[0]}
                    setYourClubsList={setYourClubsList}
                  />
                )}
              </Item>
              <Item
                sx={{
                  backgroundColor: " #04471C",
                  border: "2px dashed #0D2818",
                }}
              >
                <BasicDateCalendar
                  value={value}
                  setValue={setValue}
                  matchesData={matchesData}
                  setMatchesData={setMatchesData}
                  setShowTable={setShowTable}
                />
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
                            <LeagueDetailsInMatchComponent
                              handleShowTable={handleShowTable}
                              match={match}
                            />
                            <h1>
                              <a
                                style={{
                                  color: "white",
                                  textDecoration: "none",
                                }}
                                href={`/${match.match_hometeam_id}`}
                              >
                                {" "}
                                {match.match_hometeam_name}
                              </a>{" "}
                              -{" "}
                              <a
                                href={`/${match.match_awayteam_id}`}
                                style={{
                                  color: "white",
                                  textDecoration: "none",
                                }}
                              >
                                {match.match_awayteam_name}
                              </a>{" "}
                              <Tooltip
                                title={
                                  yourFollowingMatches
                                    .map((m) => m.match_id)
                                    .includes(match.match_id)
                                    ? "Match is already on your list"
                                    : "Add match on your list"
                                }
                              >
                                <Button
                                  onClick={() => {
                                    if (
                                      yourFollowingMatches
                                        .map((m) => m.match_id)
                                        .includes(match.match_id)
                                    ) {
                                      setYourFollowingMatches(
                                        yourFollowingMatches.filter(
                                          (m) => m.match_id !== match.match_id
                                        )
                                      );
                                    } else {
                                      handleFetch(match.match_id);
                                    }
                                  }}
                                >
                                  {yourFollowingMatches
                                    .map((m) => m.match_id)
                                    .includes(match.match_id) ? (
                                    <FavoriteIcon
                                      fontSize="large"
                                      sx={{ color: "red" }}
                                    />
                                  ) : (
                                    <FavoriteBorderIcon
                                      fontSize="large"
                                      sx={{ color: "white" }}
                                    />
                                  )}
                                </Button>
                              </Tooltip>
                            </h1>
                            <Box
                              sx={{
                                textAlign: "left",
                                paddingRight: "none",
                                width: "100%",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                backgroundColor: "rgba(0,0,0,0.5)",
                                borderTop: "1px solid black",
                                borderBottom: "1px solid black",
                              }}
                            >
                              <a href={`/${match.match_hometeam_id}`}>
                                <img
                                  src={match.team_home_badge}
                                  alt={match.team_home_badge}
                                  style={{
                                    borderRadius: "2px",
                                    paddingLeft: "60px",
                                  }}
                                />
                              </a>
                              <a href={`/${match.match_awayteam_id}`}>
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
                              </a>
                            </Box>
                            <h1
                              style={{
                                fontSize: "50px",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                backgroundColor: "rgba(0,0,0,0.5)",
                                borderTop: "1px solid black",
                                borderBottom: "1px solid black",
                              }}
                            >
                              {match.match_hometeam_score
                                ? match.match_hometeam_score
                                : " - "}
                              :
                              {match.match_awayteam_score
                                ? match.match_awayteam_score
                                : " - "}
                            </h1>
                            <h3>
                              {`(${
                                match.match_hometeam_halftime_score
                                  ? match.match_hometeam_halftime_score
                                  : " - "
                              }:${
                                match.match_awayteam_halftime_score
                                  ? match.match_awayteam_halftime_score
                                  : " - "
                              })`}
                            </h3>
                            <Scorers match={match} />
                            <h4>
                              Referee:{" "}
                              {match.match_referee
                                ? match.match_referee
                                : "More details before the game"}
                            </h4>
                            <h5>{match.match_stadium}</h5>
                            <h6>{match.match_status}</h6>
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
                {clubInfo.length && (
                  <LeagueTable table={table} club={clubInfo[0]} />
                )}
              </Item>
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
}
