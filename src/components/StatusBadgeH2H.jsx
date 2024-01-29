import * as React from "react";

export function StatusBadgeH2H({ match, club, EngOrPl = true }) {
  return (
    <span
      style={{
        marginRight: "7px",
        boxShadow: "1px black",
        fontWeight: "900",
        border:
          match.match_hometeam_id === club.team_key
            ? Number(match.match_hometeam_score) >
              Number(match.match_awayteam_score)
              ? "1px solid green"
              : Number(match.match_hometeam_score) ==
                Number(match.match_awayteam_score)
              ? "1px solid grey"
              : Number(match.match_hometeam_score) <
                  Number(match.match_awayteam_score) && "1px solid red"
            : Number(match.match_hometeam_score) <
              Number(match.match_awayteam_score)
            ? "1px solid green"
            : Number(match.match_hometeam_score) ==
              Number(match.match_awayteam_score)
            ? "1px solid grey"
            : Number(match.match_hometeam_score) >
                Number(match.match_awayteam_score) && "1px solid red",
        padding: "2px 7px 2px 7px",
        backgroundColor:
          match.match_hometeam_id === club.team_key
            ? Number(match.match_hometeam_score) >
              Number(match.match_awayteam_score)
              ? "rgba(4, 181, 27, 0.4)"
              : Number(match.match_hometeam_score) ==
                Number(match.match_awayteam_score)
              ? "rgba(99, 99, 99, 0.4)"
              : Number(match.match_hometeam_score) <
                  Number(match.match_awayteam_score) && "rgba(240, 5, 5, 0.4)"
            : Number(match.match_hometeam_score) <
              Number(match.match_awayteam_score)
            ? "rgba(4, 181, 27, 0.4)"
            : Number(match.match_hometeam_score) ==
              Number(match.match_awayteam_score)
            ? "rgba(99, 99, 99, 0.4)"
            : Number(match.match_hometeam_score) >
                Number(match.match_awayteam_score) && "rgba(240, 5, 5, 0.4)",
        borderRadius: "3px",
        color: "white",
      }}
    >
      {match.match_hometeam_id === club.team_key
        ? Number(match.match_hometeam_score) >
          Number(match.match_awayteam_score)
          ? EngOrPl
            ? "W"
            : "Z"
          : Number(match.match_hometeam_score) ==
            Number(match.match_awayteam_score)
          ? EngOrPl
            ? "D"
            : "R"
          : Number(match.match_hometeam_score) <
              Number(match.match_awayteam_score) && EngOrPl
          ? "L"
          : "P"
        : Number(match.match_hometeam_score) <
          Number(match.match_awayteam_score)
        ? EngOrPl
          ? "W"
          : "Z"
        : Number(match.match_hometeam_score) ==
          Number(match.match_awayteam_score)
        ? EngOrPl
          ? "D"
          : "R"
        : Number(match.match_hometeam_score) >
            Number(match.match_awayteam_score) && EngOrPl
        ? "L"
        : "P"}
    </span>
  );
}
