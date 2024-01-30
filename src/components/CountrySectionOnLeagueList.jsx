import * as React from "react";
import { LeagueOnHomePageList } from "./LeagueOnHomePageList";
import { CoutryOnHomePageList } from "./CoutryOnHomePageList";
import useProps from "../hooks/useProps";

export function CountrySectionOnLeagueList({
  countryBadge,
  englishCountryName = "Country",
  polishCountryName = "Kraj",
  leagues,
}) {
  const { language, fetchData, fetchTodaysGames, fetchTodaysGamesTable } =
    useProps();

  return (
    <>
      <CoutryOnHomePageList
        src={countryBadge}
        text={language ? englishCountryName : polishCountryName}
      />
      {leagues.map((league, i) => (
        <LeagueOnHomePageList
          key={i}
          primary={league.leagueName}
          onClick={() => {
            fetchData(league.leagueId);
            fetchTodaysGames(league.leagueId);
            fetchTodaysGamesTable(league.leagueId);
          }}
        />
      ))}
    </>
  );
}
