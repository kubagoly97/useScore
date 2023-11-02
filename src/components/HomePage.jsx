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
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const populateQuote = async () => {
    const req = await fetch("http://localhost:4000/username", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    if (data.status === "ok") {
      setUser(data);
      console.log(data);
    }
  };
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
              {user.username
                ? `Hello ${user.username}, choose the league!`
                : `Choose the league!`}
            </h1>
            {user.username && (
              <button
                onClick={() => {
                  setUser({});
                  localStorage.removeItem("token");
                }}
              >
                Log out
              </button>
            )}

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
              <></>
            )}
          </Container>
        </>
      )}
    </>
  );
}
