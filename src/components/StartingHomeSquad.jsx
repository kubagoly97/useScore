import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Item } from "./MatchDetailsOnHomePage";
import { Grid } from "@mui/material";
export function StartingHomeSquad({ match }) {
  return (
    <>
      {" "}
      <Grid
        item
        xs={6}
        sx={{
          textAlign: "left",
          bgcolor: "#0D2818",
          borderRadius: "4px",
        }}
      >
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
            src={match.team_home_badge}
            alt=""
            style={{ width: "11px" }}
          />{" "}
          {match.match_hometeam_name}
        </Item>
        <Box sx={{ width: "100%" }}>
          <Stack spacing={0}>
            {match.lineup.home.starting_lineups.map((player, i) => (
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
                      paddingRight: "3px",
                      borderRight: "0.5px solid #16DB65",
                    }}
                  >
                    {player.lineup_number}
                  </span>
                  {"  "}
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
