import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Item } from "./MatchDetailsOnHomePage";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export function StartingAwaySquad({ match }) {
  return (
    <>
      <Grid item xs={6} sx={{ bgcolor: "#0D2818" }}>
        <Item
          sx={{
            borderBottom: "0.5px solid white",
            marginBottom: "10px",
            bgcolor: "black",
            color: "white",
            fontWeight: "900",
            borderRadius: "0px",
          }}
        >
          {" "}
          <img
            src={match.team_away_badge}
            alt=""
            style={{ width: "11px" }}
          />{" "}
          {match.match_awayteam_name}
        </Item>
        <Box sx={{ width: "100%" }}>
          <Stack spacing={0}>
            {match.lineup.away.starting_lineups.map((player, i) => (
              <a
                href={`player?play=${player.player_key}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Item
                  sx={{
                    fontWeight: "100",
                    backgroundColor: "#0D2818",
                    color: "white",
                    paddingTop: "0px",
                    textAlign: "left",
                    boxShadow: "none",
                    ":hover": {
                      cursor: "pointer",
                      bgcolor: "rgba(255,255,255,0.1)",
                      fontWeight: "400",
                      color: "white",
                    },
                  }}
                >
                  <span
                    style={{
                      borderRight: "0.5px solid #16DB65",
                      paddingRight: "3px",
                    }}
                  >
                    {player.lineup_number}
                  </span>{" "}
                  {player.lineup_player}
                </Item>
              </a>
            ))}
          </Stack>
        </Box>
      </Grid>
    </>
  );
}
