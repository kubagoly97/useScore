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
  const [todaysGamesTable, setTodaysGamesTable] = useState([]);
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
        { leagueName: "UEFA Champions League", leagueId: 3 },
        { leagueName: "UEFA Europa Cup", leagueId: 4 },
        { leagueName: "UEFA Europa Conference League", leagueId: 683 },
      ],
      countryBadge: "Inter.png",
      englishCountryName: "Eurocups",
      polishCountryName: "Puchary europejskie",
    },
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
    {
      leagues: [
        { leagueName: "1. SNL", leagueId: 296 },
        { leagueName: "2. SNL", leagueId: 294 },
      ],
      countryBadge: "Slovenia.png",
      englishCountryName: "Slovenia",
      polishCountryName: "Słowenia",
    },
    {
      leagues: [{ leagueName: "Liga Profesional", leagueId: 44 }],
      countryBadge: "Argentina.png",
      englishCountryName: "Argentina",
      polishCountryName: "Argentyna",
    },
    {
      leagues: [
        { leagueName: "Superliga", leagueId: 135 },
        { leagueName: "1. Division", leagueId: 138 },
        { leagueName: "2. Division", leagueId: 136 },
      ],
      countryBadge: "Denmark.png",
      englishCountryName: "Denmark",
      polishCountryName: "Dania",
    },
    {
      leagues: [
        { leagueName: "Allsvenskan", leagueId: 307 },
        { leagueName: "Superettan", leagueId: 305 },
      ],
      countryBadge: "Sweden.png",
      englishCountryName: "Sweden",
      polishCountryName: "Szwecja",
    },
    {
      leagues: [
        { leagueName: "Premier Division", leagueId: 200 },
        { leagueName: "First Division", leagueId: 198 },
      ],
      countryBadge: "Ireland.png",
      englishCountryName: "Ireland",
      polishCountryName: "Irlandia",
    },
    {
      leagues: [
        { leagueName: "Superliga", leagueId: 31 },
        { leagueName: "1st Division", leagueId: 32 },
        { leagueName: "2nd Division", leagueId: 33 },
      ],
      countryBadge: "Albania.png",
      englishCountryName: "Albania",
      polishCountryName: "Albania",
    },
    {
      leagues: [
        { leagueName: "1 Lyga", leagueId: 227 },
        { leagueName: "A Lyga", leagueId: 226 },
      ],
      countryBadge: "Lithuania.jpeg",
      englishCountryName: "Lithuania",
      polishCountryName: "Litwa",
    },
    {
      leagues: [
        { leagueName: "Serie A", leagueId: 99 },
        { leagueName: "Serie B", leagueId: 75 },
        { leagueName: "Serie C", leagueId: 79 },
      ],
      countryBadge: "Brazil.png",
      englishCountryName: "Brazil",
      polishCountryName: "Brazylia",
    },
    {
      leagues: [
        { leagueName: "OTP Bank Liga", leagueId: 191 },
        { leagueName: "Markantil Bank Liga", leagueId: 188 },
      ],
      countryBadge: "Hungary.png",
      englishCountryName: "Hungary",
      polishCountryName: "Węgry",
    },
    {
      leagues: [{ leagueName: "Urvalsdeild", leagueId: 192 }],
      countryBadge: "Iceland.png",
      englishCountryName: "Iceland",
      polishCountryName: "Islandia",
    },
  ];
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };
  const dateStyle = {
    fontSize: "13px",
    color: "rgb(171, 171, 171)",
    fontWeight: "100",
  };

  const dayOfTheWeek =
    (todaysDate.$W === 1 && "Monday") ||
    (todaysDate.$W === 2 && "Tuesday") ||
    (todaysDate.$W === 3 && "Wednesday") ||
    (todaysDate.$W === 4 && "Thursday") ||
    (todaysDate.$W === 5 && "Friday") ||
    (todaysDate.$W === 6 && "Saturday") ||
    (todaysDate.$W === 7 && "Sunday");

  const polishDayOfTheWeek =
    (todaysDate.$W === 1 && "Poniedziałek") ||
    (todaysDate.$W === 2 && "Wtorek") ||
    (todaysDate.$W === 3 && "Środa") ||
    (todaysDate.$W === 4 && "Czwartek") ||
    (todaysDate.$W === 5 && "Piątek") ||
    (todaysDate.$W === 6 && "Sobota") ||
    (todaysDate.$W === 7 && "Niedziela");

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
  };

  const fetchTodaysGamesTable = async (id) => {
    const url = `https://apiv3.apifootball.com/?action=get_standings&league_id=${id}&APIkey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const resJSON = await res.json();
    console.log(resJSON);
    setTodaysGamesTable(resJSON);
  };

  const handleAddMatchOnYourFavouriteList = async (match) => {
    const team_home_badge = match.team_home_badge;
    const team_away_badge = match.team_away_badge;
    const match_hometeam_score = match.match_hometeam_score;
    const match_awayteam_score = match.match_awayteam_score;
    const match_date = match.match_date;
    const match_time = match.match_time;
    const match_id = match.match_id;
    setYourFollowingMatches([
      ...yourFollowingMatches,
      {
        team_home_badge: match.team_home_badge,
        team_away_badge: match.team_away_badge,
        match_hometeam_score: match.match_hometeam_score,
        match_awayteam_score: match.match_awayteam_score,
        match_date: match.match_date,
        match_time: match.match_time,
        match_id: match.match_id,
      },
    ]);
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}matchesList`, {
      method: "POST",
      body: JSON.stringify({
        team_home_badge,
        team_away_badge,
        match_hometeam_score,
        match_awayteam_score,
        match_date,
        match_time,
        match_id,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await res.json();
  };

  const handleDelete = async (id) => {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}matchesList/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    if (res.ok) {
      setYourFollowingMatches(yourFollowingMatches.filter((c) => c._id !== id));
    } else {
      console.log("ERROR");
    }
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
        dayOfTheWeek,
        polishDayOfTheWeek,
        handleAddMatchOnYourFavouriteList,
        handleDelete,
        dateStyle,
        fetchTodaysGamesTable,
        todaysGamesTable,
        setTodaysGamesTable,
      }}
    >
      {children}
    </Context.Provider>
  );
};
