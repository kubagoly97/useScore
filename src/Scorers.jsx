import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Item } from "./BasicGrid";

export function Scorers({ match }) {
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
              <p key={i} style={{ fontSize: "9px" }}>
                {scorer.home_scorer && scorer.time && `⚽️ ${scorer.time}' `}
                {scorer.home_scorer && scorer.home_scorer}{" "}
                {scorer.home_assist && `(a. ${scorer.home_assist})`}
              </p>
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
              <p key={i} style={{ fontSize: "9px" }}>
                {scorer.away_scorer && scorer.time && `⚽️ ${scorer.time}' `}
                {scorer.away_scorer && scorer.away_scorer}{" "}
                {scorer.away_assist && `(a. ${scorer.away_assist})`}
              </p>
            ))}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}