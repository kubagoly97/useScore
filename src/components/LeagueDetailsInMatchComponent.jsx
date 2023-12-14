import * as React from "react";
import useProps from "../hooks/useProps";

export function LeagueDetailsInMatchComponent({ match, setShowTable }) {
  const { language } = useProps();
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: "sans-serif",
        borderRadius: "3px",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <img
        onClick={() => {
          setShowTable(true);
        }}
        style={{
          maxWidth: "25%",
          maxHeight: "50px",
          borderRadius: "3px",
          cursor: "pointer",
        }}
        src={match.league_logo}
        alt={match.league_logo}
      />
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
