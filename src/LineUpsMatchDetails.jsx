import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Item } from "./MatchDetailsOnHomePage";

export function LineUpsMatchDetails({ match }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Item sx={{ backgroundColor: "black", color: "white" }}>
              <div
                style={{
                  borderBottom: "0.5px solid #04471C",
                  paddingBottom: "3px",
                }}
              >
                <img
                  src={match.team_home_badge}
                  alt=""
                  style={{ width: "11px" }}
                />{" "}
                {match.match_hometeam_name}
              </div>
              <ul style={{ listStyleType: "none", textAlign: "left" }}>
                {match.lineup.home.starting_lineups.map((player, i) => (
                  <li key={i}>
                    <div>
                      {Number(player.lineup_number) !== 0 &&
                        player.lineup_number}{" "}
                      <span style={{ color: "green" }}>|</span>{" "}
                      <Link
                        to={`player?play=${player.player_key}`}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        {player.lineup_player
                          .split(" ")
                          .splice(0, 1)
                          .toString()
                          .slice(0, 1)}
                        .{" "}
                        {player.lineup_player
                          .split(" ")
                          .splice(1, 2)
                          .toString()}{" "}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
              <span>
                Manager:{" "}
                {match.lineup.home.coach.length
                  ? match.lineup.home.coach[0].lineup_player
                  : ""}
              </span>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item sx={{ backgroundColor: "black", color: "white" }}>
              <div
                style={{
                  borderBottom: "0.5px solid #04471C",
                  paddingBottom: "3px",
                }}
              >
                <img
                  src={match.team_away_badge}
                  alt=""
                  style={{ width: "11px" }}
                />{" "}
                {match.match_awayteam_name}
              </div>
              <ul style={{ listStyleType: "none", textAlign: "left" }}>
                {match.lineup.away.starting_lineups.map((player, i) => (
                  <li key={i}>
                    {Number(player.lineup_number) !== 0 && player.lineup_number}{" "}
                    <span style={{ color: "green" }}>|</span>{" "}
                    <Link
                      to={`player?play=${player.player_key}`}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {player.lineup_player
                        .split(" ")
                        .splice(0, 1)
                        .toString()
                        .slice(0, 1)}
                      .{" "}
                      {player.lineup_player.split(" ").splice(1, 2).toString()}
                    </Link>
                  </li>
                ))}
              </ul>
              <span>
                Manager:{" "}
                {match.lineup.away.coach.length
                  ? match.lineup.away.coach[0].lineup_player
                  : ""}
              </span>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <p
        style={{
          fontSize: "12px",
          borderBottom: "0.5px solid #04471C",
          paddingBottom: "3px",
        }}
      >
        Details
      </p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Item sx={{ backgroundColor: "black", color: "white" }}>
              <div style={{ borderRight: "0.5px solid #04471C" }}>
                {match.goalscorer.length ? <span>Goal scorers:</span> : ""}
                <ul style={{ listStyleType: "none", textAlign: "left" }}>
                  {match.goalscorer.map((scorer, i) => (
                    <li
                      style={{
                        color: scorer.home_scorer ? "green" : "red",
                      }}
                    >
                      <img
                        style={{ width: "16px", marginRight: "5px" }}
                        src={
                          scorer.home_scorer.length
                            ? match.team_home_badge
                            : match.team_away_badge
                        }
                        alt=""
                      />
                      {scorer.time}'{" "}
                      {scorer.home_scorer.length
                        ? scorer.home_scorer
                        : scorer.away_scorer}
                    </li>
                  ))}
                </ul>
              </div>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item sx={{ backgroundColor: "black", color: "white" }}>
              <div>
                <span>Referee: {match.match_referee}</span>
                <p>Stadium: {match.match_stadium}</p>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
