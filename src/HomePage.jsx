import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ClubCard from "./ClubCard";
import Buttons from "./Buttons";
import Loading from "./Loading";
import { useEffect } from "react";
import ClubsList from "./ClubsList";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function HomePage({
  clubs,
  fetchEnglishData,
  fetchSpainData,
  fetchSpain2Data,
  fetchGermanyData,
  fetchEkstraklasaData,
  showClubList,
  isLoading,
  setMatchesData,
  yourClubsList,
  setYourClubsList,
  setIsOnList,
  isOnList,
}) {
  useEffect(function () {
    setMatchesData({});
  }, []);

  return (
    <>
      <Buttons
        fetchSpainData={fetchSpainData}
        fetchEnglishData={fetchEnglishData}
        fetchSpain2Data={fetchSpain2Data}
        fetchGermanyData={fetchGermanyData}
        fetchEkstraklasaData={fetchEkstraklasaData}
      />
      {isLoading && <Loading />}
      {showClubList ? (
        <>
          <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
            <ClubCard clubs={clubs} />
          </Box>
        </>
      ) : (
        <>
          <h1 className="h1OnPage"> Choose the league! ↑</h1>
          <h1 className="h1OnPage">
            {yourClubsList.length
              ? "Choose one of the team from your list"
              : "And add some on your list"}
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
        </>
      )}
    </>
  );
}
