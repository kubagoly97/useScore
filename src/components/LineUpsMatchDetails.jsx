import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Item } from "./MatchDetailsOnHomePage";
import useProps from "../hooks/useProps";
import { AwaySquadOnHomePage } from "./AwaySquadOnHomePage";
import { HomeSquadOnHomePage } from "./HomeSquadOnHomePage";

export function LineUpsMatchDetails({ match }) {
  const { language } = useProps();
  const headerStyle = { backgroundColor: "black", color: "white" };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <HomeSquadOnHomePage match={match} headerStyle={headerStyle} />
          </Grid>
          <Grid xs={6}>
            <AwaySquadOnHomePage match={match} headerStyle={headerStyle} />
          </Grid>
        </Grid>
      </Box>
      <div
        style={{
          fontSize: "12px",
          borderBottom: "0.5px solid #04471C",
          paddingBottom: "3px",
        }}
      >
        {language ? "Details: " : "Szczegóły: "}
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Item sx={headerStyle}>
              <div style={{ borderRight: "0.5px solid #04471C" }}>
                {match.goalscorer.length ? (
                  <span>{language ? "Goal scorers: " : "Bramki: "}</span>
                ) : (
                  ""
                )}
                <ul style={{ listStyleType: "none", textAlign: "left" }}>
                  {match.goalscorer.map((scorer, i) => (
                    <li
                      key={i}
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
            <Item sx={headerStyle}>
              <div>
                <span>
                  {language ? "Referee: " : "Sędzia: "}
                  {match.match_referee}
                </span>
                <p>
                  {language ? "Stadium: " : "Stadion: "}
                  {match.match_stadium}
                </p>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
