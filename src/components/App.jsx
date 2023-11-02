import { useState, useEffect } from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as React from "react";
import dayjs from "dayjs";
import FootballBar from "./FootballBar";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import BasicGrid2 from "./BasicGrid2";
import { PlayerPage } from "./PlayerPage";
import LoginPage from "./LoginPage";
import Register from "./Register";

export default function App() {
  // -------------------------------
  const [showClubList, setShowClubList] = useState(false);
  // -------------------------------
  const [isLoading, setIsLoading] = useState(false);
  // -------------------------------
  const [clubs, setClubList] = useState([]);
  // -------------------------------
  const [matchesData, setMatchesData] = useState([]);
  // -------------------------------
  const [yourClubsList, setYourClubsList] = useState([]);
  // -------------------------------
  const [yourFollowingMatches, setYourFollowingMatches] = useState([]);
  // ---------------------------
  const [playerData, setPlayerData] = useState({});
  // ---------------------------
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

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/clubList");
      const resJSON = await res.json();
      setYourClubsList(resJSON);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/matchesList");
      const resJSON = await res.json();
      setYourFollowingMatches(resJSON);
    };
    fetchData();
  }, []);

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
          playerData={playerData}
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
              yourFollowingMatches={yourFollowingMatches}
              setYourFollowingMatches={setYourFollowingMatches}
              setPlayerData={setPlayerData}
            />
          }
        />
        <Route
          path="/:id"
          element={
            <BasicGrid2
              value={value}
              setValue={setValue}
              yourClubsList={yourClubsList}
              setYourClubsList={setYourClubsList}
              matchesData={matchesData}
              setMatchesData={setMatchesData}
              yourFollowingMatches={yourFollowingMatches}
              setYourFollowingMatches={setYourFollowingMatches}
            />
          }
        />
        <Route
          path="player"
          element={
            <PlayerPage playerData={playerData} setPlayerData={setPlayerData} />
          }
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
