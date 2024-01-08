import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BasicDateCalendar from "./BasicDateCalendar";
import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import TeamInfoCard from "./TeamInfoCard";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { GameDetails } from "./GameDetails";
import SwitchSquadBG2 from "./SwitchSquadBG2";
import useProps from "../hooks/useProps";
import SwitchTableAndTopScorers from "./SwitchTableAndTopScorers";
import Fade from "@mui/material/Fade";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid2() {
  const {
    value,
    matchesData,
    setMatchesData,
    setYourFollowingMatches,
    yourFollowingMatches,
    setHomePageFootballBar,
    language,
  } = useProps();

  const [showTable, setShowTable] = useState(false);
  const [table, setTable] = useState([]);
  const [clubInfo, setClubInfo] = useState([]);
  const [topScorers, setTopScorers] = useState([]);

  let { id } = useParams();

  const gameDeatilsAndTableStyle = {
    backgroundColor: " #0D2818",
    border: "1px dashed #16DB65",
    borderRadius: "5px",
    padding: "0px 0px 3px 0px",
  };
  const boxStyle = {
    backgroundColor: " #0D2818",
    border: "1px dashed #16DB65",
    borderRadius: "5px",
  };

  const squadBoxStyle = {
    borderRadius: "5px",
    backgroundColor: " #0D2818",
    border: "1px dashed #16DB65",
    marginTop: "15px",
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
        `https://apiv3.apifootball.com/?action=get_events&from=2023-07-01&to=2024-06-30&team_id=${id}&APIkey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const resJSON = await res.json();
      setMatchesData(resJSON);
    }
    fetchDetails();
  }, []);

  useEffect(() => {
    setHomePageFootballBar(false);
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: "15px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <Stack spacing={2}>
              <Fade in={clubInfo.length}>
                <Item sx={boxStyle}>
                  {clubInfo.length ? (
                    <TeamInfoCard club={clubInfo[0]} />
                  ) : (
                    <>
                      <CircularProgress color="success" />
                    </>
                  )}
                </Item>
              </Fade>
              <Fade in={matchesData}>
                <Item sx={boxStyle}>
                  {matchesData.length ? (
                    <BasicDateCalendar setShowTable={setShowTable} />
                  ) : (
                    <CircularProgress color="success" />
                  )}
                </Item>
              </Fade>
            </Stack>
          </Grid>
          {!showTable ? (
            <Grid item xs={12} sm={7}>
              <Stack>
                <Fade in={matchesData.length}>
                  <Item sx={gameDeatilsAndTableStyle}>
                    {matchesData.length ? (
                      matchesData.map(
                        (match, i) =>
                          value == match.match_date && (
                            <GameDetails
                              setTopScorers={setTopScorers}
                              setTable={setTable}
                              match={match}
                              handleFetch={handleFetch}
                              key={i}
                              club={clubInfo[0]}
                              setShowTable={setShowTable}
                              showTable={showTable}
                            />
                          )
                      )
                    ) : (
                      <>
                        <CircularProgress color="success" />
                      </>
                    )}
                  </Item>
                </Fade>
                <Fade in={clubInfo.length}>
                  <Item component="div" sx={squadBoxStyle}>
                    {clubInfo.length && (
                      <h3 style={{ color: "white", fontWeight: "200" }}>
                        {language ? "Manager: " : "Trener: "}{" "}
                        {clubInfo[0].coaches[0].coach_name}
                      </h3>
                    )}
                    {clubInfo.length && <SwitchSquadBG2 club={clubInfo[0]} />}
                  </Item>
                </Fade>
              </Stack>
            </Grid>
          ) : (
            <Grid item xs={12} sm={7}>
              <Fade in={showTable}>
                <Item sx={gameDeatilsAndTableStyle}>
                  <SwitchTableAndTopScorers
                    table={table}
                    club={clubInfo[0]}
                    topScorers={topScorers}
                  />
                </Item>
              </Fade>
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
}
