import { createContext, useState, useEffect } from "react";
import dayjs from "dayjs";
import { useAuthContext } from "../hooks/useAuthContext";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const { user } = useAuthContext();
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
  const [language, setLanguage] = useState(function () {
    const storedValue = localStorage.getItem("language");
    return storedValue ? JSON.parse(storedValue) : true;
  });
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
  const fetch3BundesligaData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=176&APIkey=${
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
  const fetchLeagueOneData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=154&APIkey=${
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
  const fetchLeagueTwoData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=145&APIkey=${
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
  const fetchCroatiaData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=124&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
  };
  const fetchSaudiData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=278&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
  };
  const fetchCzechData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=134&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
  };
  const fetchEredivisieData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=244&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
  };
  const fetchPortugalData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=266&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
  };
  const fetchMLSData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=332&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
  };
  const fetchNorwegianData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=253&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
  };
  const fetchTurkishData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=322&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJson = await res.json();
    setClubList(resJson);
    setShowClubList(true);
    setIsLoading(false);
  };
  const fetchABundesligaData = async () => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=56&APIkey=${
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
    <Context.Provider
      value={{
        showClubList,
        setShowClubList,
        isLoading,
        setIsLoading,
        clubs,
        setClubList,
        matchesData,
        setMatchesData,
        yourClubsList,
        setYourClubsList,
        yourFollowingMatches,
        setYourFollowingMatches,
        value,
        setValue,
        playerData,
        setPlayerData,
        setHomePageFootballBar,
        homePageFootballBar,
        language,
        setLanguage,
        fetchEnglishData,
        fetchSpainData,
        fetchSpain2Data,
        fetchGermanyData,
        fetchEkstraklasaData,
        fetch2BundesligaData,
        fetch1LigaData,
        fetchSerieAData,
        fetchChampionshipData,
        fetchLigueOneData,
        fetch2LigaData,
        fetchSwitzerlandData,
        fetchSerieBData,
        fetchCroatiaData,
        fetchSaudiData,
        fetchMLSData,
        fetchCzechData,
        fetchEredivisieData,
        fetchPortugalData,
        fetchLeagueOneData,
        fetch3BundesligaData,
        fetchNorwegianData,
        fetchTurkishData,
        fetchABundesligaData,
        fetchLeagueTwoData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
