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
  const fetchData = async (id) => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=${id}&APIkey=${
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
        fetchData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
