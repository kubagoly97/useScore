import * as React from "react";
import Box from "@mui/material/Box";
import BasicGrid from "./BasicGrid";
import Loading from "./Loading";
import { useEffect, useState, useContext } from "react";
import { Container } from "@mui/system";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { Grid } from "@mui/joy";
import LeaguesList from "./LeaguesList";
import SwitchPanels from "./SwitchPanels";
import { LogoutButtonStackOnHomePage } from "./LogoutButtonStackOnHomePage";
import { Context } from "../context/Context";

export default function HomePage() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const {
    setPlayerData,
    setMatchesData,
    setHomePageFootballBar,
    isLoading,
    showClubList,
  } = useContext(Context);

  useEffect(function () {
    setMatchesData({});
    setPlayerData({});
    setHomePageFootballBar(true);
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
        <Grid container spacing={0.9}>
          <Grid xs={0} sm={4} md={3} sx={{ marginTop: "2em" }}>
            <LeaguesList />
          </Grid>
          <Grid xs={11.5} sm={8} md={9}>
            {showClubList ? (
              <Box sx={{ flexGrow: 1, marginTop: "30px" }}>
                <BasicGrid />
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
                {!user && <LogoutButtonStackOnHomePage />}
                {user ? <SwitchPanels /> : <></>}
              </Container>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
