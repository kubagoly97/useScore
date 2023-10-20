import * as React from "react";

export function LeagueDetailsInMatchComponent({ handleShowTable, match }) {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: "sans-serif",
        borderRadius: "3px",
        backgroundColor: "rgba(0,0,0,0.5)",
        borderBottom: "1px solid black",
      }}
    >
      <img
        onClick={() => {
          handleShowTable(match.league_id);
          console.log(match.league_id);
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
        <p style={{ fontWeight: "bold", color: "#16DB65" }}>
          {match.league_name} - {match.match_round}. round - {match.league_year}{" "}
          {match.match_time}
        </p>
      </div>
    </section>
  );
}
