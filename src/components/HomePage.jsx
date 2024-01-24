import * as React from "react";
import Box from "@mui/material/Box";
import BasicGrid from "./BasicGrid";
import Loading from "./Loading";
import { useEffect } from "react";
import { Container } from "@mui/system";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { Grid } from "@mui/joy";
import LeaguesList from "./LeaguesList";
import SwitchPanels from "./SwitchPanels";
import { LogoutButtonStackOnHomePage } from "./LogoutButtonStackOnHomePage";
import useProps from "../hooks/useProps";
import Fade from "@mui/material/Fade";
import TodaysGamesList from "./TodaysGamesList";
import PersonIcon from "@mui/icons-material/Person";

export default function HomePage() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const dateStyle = {
    fontSize: "13px",
    color: "rgb(171, 171, 171)",
    fontWeight: "100",
  };

  const username = user
    ? `${user.email
        .slice(0, user.email.indexOf("@"))
        .charAt(0)
        .toUpperCase()}${user.email.slice(0, user.email.indexOf("@")).slice(1)}`
    : "username";

  const {
    setPlayerData,
    setMatchesData,
    setHomePageFootballBar,
    isLoading,
    showClubList,
    language,
    homePageFootballBar,
    todaysGames,
    todaysDate,
    dayOfTheWeek,
    polishDayOfTheWeek,
  } = useProps();

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
      <Fade in={homePageFootballBar} timeout={750}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0.9}>
            <Grid xs={0} sm={0} md={1}></Grid>
            <Grid xs={0} sm={4} md={2} sx={{ marginTop: "2em" }}>
              <LeaguesList />
            </Grid>
            <Grid xs={11.4} sm={7.8} md={7}>
              {showClubList ? (
                <Fade in={!isLoading} timeout={500}>
                  <Box
                    sx={{
                      flexGrow: 1,
                      marginTop: "30px",
                    }}
                  >
                    {todaysGames.length > 0 ? (
                      <>
                        <span style={dateStyle}>
                          {todaysDate.$D}.{todaysDate.$M < 9 ? 0 : ""}
                          {todaysDate.$M + 1}.{todaysDate.$y} |{" "}
                          {language ? dayOfTheWeek : polishDayOfTheWeek}
                        </span>
                        <TodaysGamesList />
                      </>
                    ) : (
                      <></>
                    )}
                    <BasicGrid />
                  </Box>
                </Fade>
              ) : (
                <Fade in={!showClubList}>
                  <Container
                    className="ImageOnHomePage"
                    maxWidth="xl"
                    sx={{
                      "& .css-r9z1sk-MuiContainer-root": {
                        paddingRight: "0px",
                      },
                    }}
                  >
                    <h1
                      className="h1OnPage"
                      style={{ marginTop: "30px", fontWeight: "100" }}
                    >
                      {user
                        ? language
                          ? `Welcome back, ${username} `
                          : `Witaj ponownie, ${username} `
                        : language
                        ? `Welcome on useScore, choose the league!`
                        : `Witaj na useScore, wybierz ligę!`}
                      {user ? (
                        <span>
                          <PersonIcon fontSize="small" />
                        </span>
                      ) : (
                        <></>
                      )}
                    </h1>
                    {!user && <LogoutButtonStackOnHomePage />}
                    {user ? <SwitchPanels /> : <></>}
                  </Container>
                </Fade>
              )}
              <Grid xs={0} sm={0} md={2}></Grid>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </>
  );
}
