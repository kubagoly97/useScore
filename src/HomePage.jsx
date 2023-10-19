import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ClubCard from "./ClubCard";
import Loading from "./Loading";
import { useEffect } from "react";
import ClubsList from "./ClubsList";
import { Container } from "@mui/system";
import FavouriteMatchesList from "./FavouriteMatchesList";

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
}) {
  useEffect(function () {
    setMatchesData({});
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {showClubList ? (
        <>
          <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
            <ClubCard clubs={clubs} />
          </Box>
        </>
      ) : (
        <>
          <Container className="ImageOnHomePage" maxWidth="xl">
            {" "}
            <h1 className="h1OnPage" style={{ marginTop: "30px" }}>
              {" "}
              Choose the league!
            </h1>
            <h1 className="h1OnPage" style={{ marginBottom: "30px" }}>
              {yourClubsList.length
                ? "Or pick one team from your list"
                : "And add team on your list"}
            </h1>
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
              ""
            )}
          </Container>
        </>
      )}
    </>
  );
}
