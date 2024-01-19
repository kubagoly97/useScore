import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import { Box } from "@mui/system";
import useProps from "../hooks/useProps";
import Grid from "@mui/material/Grid";
import { MatchStatus } from "./MatchStatus";

export function ButtonDetailsMatch({ match, labelId, func }) {
  return (
    <ListItemButton onClick={func}>
      <FavouriteMatchButton match={match} />
    </ListItemButton>
  );
}

function FavouriteMatchButton({ match }) {
  const badgeStyle = { width: 38, height: 38, marginRight: "10px" };
  const { language } = useProps();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={2} sx={{ textAlign: "right" }}>
          <img src={match.team_home_badge} alt="" style={badgeStyle} />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ fontWeight: "300", textAlign: "center", fontSize: "26px" }}
        >
          {match.match_hometeam_score && match.match_hometeam_score}
          {match.match_hometeam_score ? ":" : "-"}
          {match.match_awayteam_score && match.match_awayteam_score}
        </Grid>
        <Grid item xs={2} sx={{ textAlign: "center" }}>
          <img src={match.team_away_badge} alt="" style={badgeStyle} />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            textAlign: "left",
            fontSize: "14px",
            fontWeight: "100",
            color: "rgb(200, 200, 200)",
          }}
        >
          {language ? (
            <MatchStatus
              match={match}
              finished={"Finished"}
              postponed={"Postponed"}
              halfTime={"Half Time"}
            />
          ) : (
            <MatchStatus
              match={match}
              finished={"Koniec"}
              postponed={"Przełozony"}
              halfTime={"Przerwa"}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
