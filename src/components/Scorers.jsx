import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Item } from "./BasicGrid2";
import { Link } from "react-router-dom";

export function Scorers({ match }) {
  const linkStyle = { color: "white", textDecoration: "none" };

  const scorersStyle = {
    fontSize: "11px",
    fontWeight: "100",
  };

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Item
            sx={{
              color: "white",
              backgroundColor: "rgba(0,0,0,0.001)",
              boxShadow: "none",
            }}
          >
            {match.goalscorer.map((scorer, i) => (
              <Link
                key={i}
                style={linkStyle}
                to={`/player?play=${scorer.home_scorer_id}`}
              >
                <p style={scorersStyle}>
                  {scorer.home_scorer && scorer.time && `⚽️ ${scorer.time}' `}
                  {scorer.home_scorer && scorer.home_scorer}{" "}
                  {scorer.home_assist && `(a. ${scorer.home_assist})`}
                </p>
              </Link>
            ))}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item
            sx={{
              color: "white",
              backgroundColor: "rgba(0,0,0,0.001)",
              boxShadow: "none",
            }}
          >
            {match.goalscorer.map((scorer, i) => (
              <Link
                key={i}
                to={`/player?play=${scorer.away_scorer_id}`}
                style={linkStyle}
              >
                <p style={scorersStyle}>
                  {scorer.away_scorer && scorer.time && `⚽️ ${scorer.time}' `}
                  {scorer.away_scorer && scorer.away_scorer}{" "}
                  {scorer.away_assist && `(a. ${scorer.away_assist})`}
                </p>
              </Link>
            ))}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
