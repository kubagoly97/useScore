import * as React from "react";
import Box from "@mui/material/Box";
import BasicGrid from "./BasicGrid";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { Grid } from "@mui/joy";
import LeaguesList from "./LeaguesList";
import SwitchPanels from "./SwitchPanels";

export default function HomePage({
  clubs,
  showClubList,
  setShowClubList,
  isLoading,
  setMatchesData,
  yourClubsList,
  setYourClubsList,
  setIsOnList,
  isOnList,
  yourFollowingMatches,
  setYourFollowingMatches,
  setPlayerData,
  fetchEnglishData,
  fetchSpainData,
  fetchSpain2Data,
  fetchGermanyData,
  fetchEkstraklasaData,
  fetch2BundesligaData,
  fetch1LigaData,
  fetchSerieAData,
  fetchChampionshipData,
  fetchLigueOneData,
  fetch2LigaData,
  fetchSwitzerlandData,
  fetchSerieBData,
}) {
  const { user } = useAuthContext();

  const navigate = useNavigate();

  useEffect(function () {
    setMatchesData({});
    setPlayerData({});
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/");
      } else {
        populateQuote();
      }
    }
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={0} sm={4} md={3} sx={{ marginTop: "2em" }}>
            <LeaguesList
              setShowClubList={setShowClubList}
              fetchEnglishData={fetchEnglishData}
              fetchSpainData={fetchSpainData}
              fetchSpain2Data={fetchSpain2Data}
              fetchGermanyData={fetchGermanyData}
              fetchEkstraklasaData={fetchEkstraklasaData}
              fetch2BundesligaData={fetch2BundesligaData}
              fetch1LigaData={fetch1LigaData}
              fetchSerieAData={fetchSerieAData}
              fetchChampionshipData={fetchChampionshipData}
              fetchLigueOneData={fetchLigueOneData}
              fetch2LigaData={fetch2LigaData}
              fetchSwitzerlandData={fetchSwitzerlandData}
              fetchSerieBData={fetchSerieBData}
            />
          </Grid>
          <Grid xs={11.5} sm={8} md={9}>
            {showClubList ? (
              <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
                <BasicGrid clubs={clubs} />
              </Box>
            ) : (
              <Container className="ImageOnHomePage" maxWidth="xl">
                <h1 className="h1OnPage" style={{ marginTop: "30px" }}>
                  {user
                    ? `Welcome back, ${user.email
                        .slice(0, user.email.indexOf("@"))
                        .charAt(0)
                        .toUpperCase()}${user.email
                        .slice(0, user.email.indexOf("@"))
                        .slice(1)} 👑`
                    : `Welcome on useScore, choose the league!`}
                </h1>
                {user ? (
                  <SwitchPanels
                    yourClubsList={yourClubsList}
                    setYourClubsList={setYourClubsList}
                    clubs={clubs}
                    setIsOnList={setIsOnList}
                    isOnList={isOnList}
                    yourFollowingMatches={yourFollowingMatches}
                    setYourFollowingMatches={setYourFollowingMatches}
                  />
                ) : (
                  <></>
                )}
              </Container>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
