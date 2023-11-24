import { useState, useEffect } from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import * as React from "react";
import dayjs from "dayjs";
import FootballBar from "./FootballBar";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import BasicGrid2 from "./BasicGrid2";
import { PlayerPage } from "./PlayerPage";
import Register from "./Register";
import { useAuthContext } from "../hooks/useAuthContext";
import LoginCard from "./LoginCard";

export default function App() {
  const { user } = useAuthContext();
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
  const [homePageFootballBar, setHomePageFootballBar] = useState(true);
  // ---------------------------
  const date = new Date();
  const [value, setValue] = useState(
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
  };
  const fetch2BundesligaData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=171&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
  };
  const fetch1LigaData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=263&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
  };
  const fetchSerieAData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=207&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
  };
  const fetchSerieBData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=206&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
  };
  const fetchChampionshipData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=153&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
  };
  const fetchLigueOneData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=168&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
  };
  const fetch2LigaData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=261&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
  };
  const fetchSwitzerlandData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=308&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}clubList`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const resJSON = await res.json();
      setYourClubsList(resJSON);
    };
    if (user) {
      fetchData();
    }
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}matchesList`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const resJSON = await res.json();
      setYourFollowingMatches(resJSON);
    };
    if (user) {
      fetchData();
    }
  }, [user]);

  return (
    <Router>
      <nav>
        <FootballBar
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
          setShowClubList={setShowClubList}
          matchesData={matchesData}
          playerData={playerData}
          homePageFootballBar={homePageFootballBar}
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
              fetch2BundesligaData={fetch2BundesligaData}
              fetch1LigaData={fetch1LigaData}
              fetchSerieAData={fetchSerieAData}
              fetchChampionshipData={fetchChampionshipData}
              fetchLigueOneData={fetchLigueOneData}
              fetch2LigaData={fetch2LigaData}
              fetchSwitzerlandData={fetchSwitzerlandData}
              fetchSerieBData={fetchSerieBData}
              showClubList={showClubList}
              setShowClubList={setShowClubList}
              isLoading={isLoading}
              setMatchesData={setMatchesData}
              yourClubsList={yourClubsList}
              setYourClubsList={setYourClubsList}
              yourFollowingMatches={yourFollowingMatches}
              setYourFollowingMatches={setYourFollowingMatches}
              setPlayerData={setPlayerData}
              setHomePageFootballBar={setHomePageFootballBar}
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
              setHomePageFootballBar={setHomePageFootballBar}
            />
          }
        />
        <Route
          path="player"
          element={
            <PlayerPage
              playerData={playerData}
              setPlayerData={setPlayerData}
              setHomePageFootballBar={setHomePageFootballBar}
            />
          }
        />
        <Route
          path="login"
          element={
            !user ? (
              <LoginCard setHomePageFootballBar={setHomePageFootballBar} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="register"
          element={
            !user ? (
              <Register setHomePageFootballBar={setHomePageFootballBar} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
