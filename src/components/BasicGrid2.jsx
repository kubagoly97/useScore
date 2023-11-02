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
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { GameDetails } from "./GameDetails";

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
      console.log(resJSON);
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
                {clubInfo.length ? (
                  <TeamInfoCard
                    yourClubsList={yourClubsList}
                    club={clubInfo[0]}
                    setYourClubsList={setYourClubsList}
                  />
                ) : (
                  <>
                    <CircularProgress color="success" />
                  </>
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
                {matchesData.length ? (
                  matchesData.map(
                    (match, i) =>
                      value == match.match_date && (
                        <GameDetails
                          match={match}
                          handleShowTable={handleShowTable}
                          yourFollowingMatches={yourFollowingMatches}
                          setYourFollowingMatches={setYourFollowingMatches}
                          handleFetch={handleFetch}
                          key={i}
                        />
                      )
                  )
                ) : (
                  <>
                    <CircularProgress color="success" />
                  </>
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
