import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BasicGrid from "./BasicGrid";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import ClubsList from "./ClubsList";
import { Container } from "@mui/system";
import FavouriteMatchesList from "./FavouriteMatchesList";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
            <h1 className="h1OnPage" style={{ marginBottom: "30px" }}></h1>
            {yourClubsList.length ? (
              <ClubsList
                yourClubsList={yourClubsList}
                setYourClubsList={setYourClubsList}
                clubs={clubs}
                setIsOnList={setIsOnList}
                isOnList={isOnList}
              />
            ) : (
              ""
            )}
            {yourFollowingMatches.length ? (
              <FavouriteMatchesList
                yourFollowingMatches={yourFollowingMatches}
                setYourFollowingMatches={setYourFollowingMatches}
              />
            ) : (
              <></>
            )}
          </Container>
        </>
      )}
    </>
  );
}
