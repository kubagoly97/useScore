import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { YourGames } from "./YourGames";
import * as React from "react";
import dayjs from "dayjs";
import BasicGrid from "./BasicGrid";
import FootballBar from "./FootballBar";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import Footer from "./Footer";

export default function App() {
  const [isOnList, setIsOnList] = useState(function () {
    const storedisOnList = localStorage.getItem("isOnList");
    return storedisOnList ? JSON.parse(storedisOnList) : false;
  });
  // -------------------------------
  const [showClubList, setShowClubList] = useState(false);
  // -------------------------------
  const [isLoading, setIsLoading] = useState(false);
  // -------------------------------
  const [clubs, setClubList] = useState(function () {
    const storedClubs = localStorage.getItem("clubs");
    return storedClubs ? JSON.parse(storedClubs) : [];
  });
  // -------------------------------
  const [matchesData, setMatchesData] = useState(function () {
    const storedMatchesData = localStorage.getItem("matchesData");
    return storedMatchesData ? JSON.parse(storedMatchesData) : [];
  });
  // -------------------------------
  const [yourClubsList, setYourClubsList] = useState(function () {
    const storedYourClubsData = localStorage.getItem("yourClubsList");
    return storedYourClubsData ? JSON.parse(storedYourClubsData) : [];
  });
  // -------------------------------
  const [clubInfo, setClubInfo] = useState(function () {
    const storedClubInfo = localStorage.getItem("clubInfo");
    return storedClubInfo ? JSON.parse(storedClubInfo) : {};
  });
  const date = new Date();
  const [value, setValue] = React.useState(
    dayjs(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
  );

  const fetchSpainData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
    setIsOnList(true);
  };
  const fetchEnglishData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=152&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
    setIsOnList(true);
  };
  const fetchSpain2Data = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=301&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
    setIsOnList(true);
  };
  const fetchGermanyData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=175&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
    setIsOnList(true);
  };
  const fetchEkstraklasaData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=259&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
    setIsOnList(true);
  };

  useEffect(
    function () {
      localStorage.setItem("clubs", JSON.stringify(clubs));
    },
    [clubs]
  );
  useEffect(
    function () {
      localStorage.setItem("matchesData", JSON.stringify(matchesData));
    },
    [matchesData]
  );
  useEffect(
    function () {
      localStorage.setItem("yourClubsList", JSON.stringify(yourClubsList));
    },
    [yourClubsList]
  );
  useEffect(
    function () {
      localStorage.setItem("storedisOnList", JSON.stringify(isOnList));
    },
    [isOnList]
  );
  useEffect(
    function () {
      localStorage.setItem("clubInfo", JSON.stringify(clubInfo));
    },
    [clubInfo]
  );

  return (
    <Router>
      <nav>
        <FootballBar
          fetchEnglishData={fetchEnglishData}
          fetchSpainData={fetchSpainData}
          fetchSpain2Data={fetchSpain2Data}
          fetchGermanyData={fetchGermanyData}
          fetchEkstraklasaData={fetchEkstraklasaData}
          matchesData={matchesData}
        />
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              value={value}
              clubs={clubs}
              fetchEnglishData={fetchEnglishData}
              fetchSpainData={fetchSpainData}
              fetchSpain2Data={fetchSpain2Data}
              fetchGermanyData={fetchGermanyData}
              fetchEkstraklasaData={fetchEkstraklasaData}
              showClubList={showClubList}
              setShowClubList={setShowClubList}
              isLoading={isLoading}
              setMatchesData={setMatchesData}
              yourClubsList={yourClubsList}
              setYourClubsList={setYourClubsList}
              setIsOnList={setIsOnList}
              isOnList={isOnList}
            />
          }
        />
        <Route
          path="/yourgames"
          element={<YourGames value={value} setValue={setValue} />}
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/grid"
          element={<BasicGrid value={value} setValue={setValue} />}
        />
        {isOnList
          ? clubs.map((club, i) => (
              <Route
                key={i}
                path={`/${club.team_name}`}
                element={
                  <BasicGrid
                    value={value}
                    setValue={setValue}
                    club={club}
                    matchesData={matchesData}
                    setMatchesData={setMatchesData}
                    yourClubsList={yourClubsList}
                    setYourClubsList={setYourClubsList}
                    setClubInfo={setClubInfo}
                    clubInfo={clubInfo}
                  />
                }
              />
            ))
          : yourClubsList.map((club, i) => (
              <Route
                key={i}
                path={`/${club.team_name}`}
                element={
                  <BasicGrid
                    value={value}
                    setValue={setValue}
                    club={club}
                    matchesData={matchesData}
                    setMatchesData={setMatchesData}
                    yourClubsList={yourClubsList}
                    setYourClubsList={setYourClubsList}
                    setClubInfo={setClubInfo}
                    clubInfo={clubInfo}
                  />
                }
              />
            ))}
      </Routes>
      {isOnList && <Footer />}
    </Router>
  );
}
