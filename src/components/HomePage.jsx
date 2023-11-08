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
  isLoading,
  setMatchesData,
  yourClubsList,
  setYourClubsList,
  setIsOnList,
  isOnList,
  yourFollowingMatches,
  setYourFollowingMatches,
  setPlayerData,
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
      {showClubList ? (
        <>
          <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
            <BasicGrid clubs={clubs} />
          </Box>
        </>
      ) : (
        <>
          {/* <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid xs={3} md={3} sx={{ marginTop: "2em" }}>
                <LeaguesList />
              </Grid>
              <Grid xs={9} md={9}> */}
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
          {/* </Grid>
            </Grid>
          </Box> */}
        </>
      )}
    </>
  );
}