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
  const [todaysGames, setTotodaysGames] = useState([]);
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
  const [todaysDate, setTodaysDate] = useState(
    dayjs(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
  );
  const everyLeagues = [
    {
      leagues: [
        { leagueName: "Premier League", leagueId: 152 },
        { leagueName: "Championship", leagueId: 153 },
        { leagueName: "League One", leagueId: 154 },
        { leagueName: "League Two", leagueId: 145 },
      ],
      countryBadge: "Anglia.png",
      englishCountryName: "England",
      polishCountryName: "Anglia",
    },
    {
      leagues: [
        { leagueName: "La Liga", leagueId: 302 },
        { leagueName: "Segunda Division", leagueId: 301 },
      ],
      countryBadge: "Spain.png",
      englishCountryName: "Spain",
      polishCountryName: "Hiszpania",
    },
    {
      leagues: [
        { leagueName: "Bundesliga", leagueId: 175 },
        { leagueName: "2. Bundesliga", leagueId: 171 },
        { leagueName: "3. Liga", leagueId: 176 },
      ],
      countryBadge: "Germany.png",
      englishCountryName: "Germany",
      polishCountryName: "Niemcy",
    },
    {
      leagues: [
        { leagueName: "PKO Ekstraklasa", leagueId: 259 },
        { leagueName: "Fortuna 1. liga", leagueId: 263 },
        { leagueName: "2. liga", leagueId: 261 },
      ],
      countryBadge: "Poland.png",
      englishCountryName: "Poland",
      polishCountryName: "Polska",
    },
    {
      leagues: [
        { leagueName: "Serie A", leagueId: 207 },
        { leagueName: "Serie B", leagueId: 206 },
        { leagueName: "Serie C", leagueId: 359 },
      ],
      countryBadge: "Italy.png",
      englishCountryName: "Italy",
      polishCountryName: "Włochy",
    },
    {
      leagues: [
        { leagueName: "Ligue 1", leagueId: 168 },
        { leagueName: "Ligue 2", leagueId: 164 },
      ],
      countryBadge: "France.png",
      englishCountryName: "France",
      polishCountryName: "Francja",
    },
    {
      leagues: [
        { leagueName: "Super League", leagueId: 308 },
        { leagueName: "Challenge League", leagueId: 312 },
      ],
      countryBadge: "Switzerland.png",
      englishCountryName: "Switzerland",
      polishCountryName: "Szwajcaria",
    },
    {
      leagues: [
        { leagueName: "HNL", leagueId: 124 },
        { leagueName: "Prva NL", leagueId: 127 },
      ],
      countryBadge: "Croatia.png",
      englishCountryName: "Croatia",
      polishCountryName: "Chorwacja",
    },
    {
      leagues: [
        { leagueName: "Saudi League", leagueId: 278 },
        { leagueName: "Division 1", leagueId: 277 },
      ],
      countryBadge: "SaudiArabia.png",
      englishCountryName: "Saudi Arabia",
      polishCountryName: "Arabia Saudyjska",
    },
    {
      leagues: [{ leagueName: "MLS", leagueId: 332 }],
      countryBadge: "USA.png",
      englishCountryName: "USA",
      polishCountryName: "USA",
    },
    {
      leagues: [
        { leagueName: "FORTUNA:LIGA", leagueId: 134 },
        { leagueName: "FNL", leagueId: 133 },
      ],
      countryBadge: "Czech.webp",
      englishCountryName: "Czechia",
      polishCountryName: "Czechy",
    },
    {
      leagues: [
        { leagueName: "Eredivisie", leagueId: 244 },
        { leagueName: "Eerste Divisie", leagueId: 245 },
      ],
      countryBadge: "Netherlands.png",
      englishCountryName: "Netherlands",
      polishCountryName: "Holandia",
    },
    {
      leagues: [
        { leagueName: "Liga Portugal", leagueId: 266 },
        { leagueName: "Liga Portugal 2", leagueId: 267 },
      ],
      countryBadge: "Portugal.png",
      englishCountryName: "Portugal",
      polishCountryName: "Portugalia",
    },
    {
      leagues: [
        { leagueName: "Eliteserien", leagueId: 253 },
        { leagueName: "OBOS-ligaen", leagueId: 362 },
      ],
      countryBadge: "Norway.png",
      englishCountryName: "Norway",
      polishCountryName: "Norwegia",
    },
    {
      leagues: [
        { leagueName: "Admiral Bundesliga", leagueId: 56 },
        { leagueName: "Admiral 2. Liga", leagueId: 53 },
      ],
      countryBadge: "Austria.png",
      englishCountryName: "Austria",
      polishCountryName: "Austria",
    },
    {
      leagues: [
        { leagueName: "Süper Lig", leagueId: 322 },
        { leagueName: "1. Lig", leagueId: 319 },
      ],
      countryBadge: "Turkey.avif",
      englishCountryName: "Turkey",
      polishCountryName: "Turcja",
    },
    {
      leagues: [
        { leagueName: "Premier League", leagueId: 325 },
        { leagueName: "Persha League", leagueId: 324 },
      ],
      countryBadge: "Ukraine.png",
      englishCountryName: "Ukraine",
      polishCountryName: "Ukraina",
    },
    {
      leagues: [
        { leagueName: "Premiership", leagueId: 279 },
        { leagueName: "Championship", leagueId: 282 },
      ],
      countryBadge: "Scotland.png",
      englishCountryName: "Scotland",
      polishCountryName: "Szkocja",
    },
    {
      leagues: [
        { leagueName: "Jupiler League", leagueId: 63 },
        { leagueName: "Challenger Pro League", leagueId: 65 },
      ],
      countryBadge: "Belgium.png",
      englishCountryName: "Belgium",
      polishCountryName: "Belgia",
    },
    {
      leagues: [
        { leagueName: "Super League", leagueId: 178 },
        { leagueName: "Super League 2", leagueId: 439 },
      ],
      countryBadge: "Greece.png",
      englishCountryName: "Greece",
      polishCountryName: "Grecja",
    },
    {
      leagues: [
        { leagueName: "Super Liga", leagueId: 293 },
        { leagueName: "2. Liga", leagueId: 420 },
      ],
      countryBadge: "Slovakia.png",
      englishCountryName: "Slovakia",
      polishCountryName: "Słowacja",
    },
  ];
  const linkStyle = { color: "white", textDecoration: "none" };

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
  const fetchTodaysGames = async (id) => {
    setIsLoading(true);
    const url = `https://apiv3.apifootball.com/?action=get_events&from=${
      todaysDate.$y
    }-${todaysDate.$M < 10 ? 0 : ""}${todaysDate.$M + 1}-${todaysDate.$D}&to=${
      todaysDate.$y
    }-${todaysDate.$M < 10 ? 0 : ""}${todaysDate.$M + 1}-${
      todaysDate.$D
    }&league_id=${id}&APIkey=${import.meta.env.VITE_API_KEY}`;
    const res = await fetch(url);
    const resJson = await res.json();
    setTotodaysGames(resJson);
    console.log(resJson.length > 0);
    console.log(resJson);
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
        fetchTodaysGames,
        todaysGames,
        setTotodaysGames,
        everyLeagues,
        linkStyle,
        todaysDate,
      }}
    >
      {children}
    </Context.Provider>
  );
};
