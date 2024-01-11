import * as React from "react";
import { Link } from "react-router-dom";
import { Item } from "./MatchDetailsOnHomePage";
import useProps from "../hooks/useProps";

export function AwaySquadOnHomePage({ match, headerStyle }) {
  const { language, linkStyle } = useProps();
  return (
    <Item sx={headerStyle}>
      <div
        style={{
          borderBottom: "0.5px solid #04471C",
          paddingBottom: "3px",
        }}
      >
        <img src={match.team_away_badge} alt="" style={{ width: "11px" }} />{" "}
        {match.match_awayteam_name}
      </div>
      <ul style={{ listStyleType: "none", textAlign: "left" }}>
        {match.lineup.away.starting_lineups.map((player, i) => (
          <li key={i} style={{ fontSize: "13px" }}>
            {Number(player.lineup_number) !== 0 && player.lineup_number}{" "}
            <span style={{ color: "green" }}>|</span>{" "}
            <Link to={`player?play=${player.player_key}`} style={linkStyle}>
              {player.lineup_player.split(" ").length === 1
                ? ` ${player.lineup_player.split(" ")}`
                : ` ${player.lineup_player
                    .split(" ")
                    .splice(0, 1)
                    .toString()
                    .slice(0, 1)}. ${player.lineup_player
                    .split(" ")
                    .splice(1, 2)
                    .toString()}`}
            </Link>
          </li>
        ))}
      </ul>
      <span>
        {language ? "Manager: " : "Trener: "}
        {match.lineup.away.coach.length
          ? match.lineup.away.coach[0].lineup_player
          : ""}
      </span>
    </Item>
  );
}
