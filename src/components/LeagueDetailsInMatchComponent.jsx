import * as React from "react";
import useProps from "../hooks/useProps";

export function LeagueDetailsInMatchComponent({ match, setShowTable }) {
  const { language } = useProps();
  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    fontFamily: "sans-serif",
    borderRadius: "3px",
    backgroundColor: "rgba(0,0,0,0.6)",
  };

  const imageInSectionStyle = {
    maxWidth: "25%",
    maxHeight: "50px",
    borderRadius: "3px",
    cursor: "pointer",
  };

  return (
    <section style={sectionStyle}>
      {match.league_name.includes("Cup") ||
      match.league_name.includes("Pokal") ||
      match.league_name.includes("Trophée") ||
      match.league_name.includes("Beker") ||
      match.league_name.includes("Trophy") ||
      match.league_name.includes("Club Friendlies") ||
      match.league_name.includes("Coupe") ? (
        <img
          style={imageInSectionStyle}
          src={match.league_logo}
          alt={match.league_logo}
        />
      ) : (
        <img
          onClick={() => {
            setShowTable(true);
          }}
          style={imageInSectionStyle}
          src={match.league_logo}
          alt={match.league_logo}
        />
      )}

      <div style={{ paddingLeft: "10px" }}>
        <p style={{ fontWeight: "300", color: "#16DB65" }}>
          {match.league_name} | {match.match_round}.{" "}
          {language ? "round" : "kolejka"} | {match.league_year} |{" "}
          {match.match_time}
        </p>
      </div>
    </section>
  );
}
