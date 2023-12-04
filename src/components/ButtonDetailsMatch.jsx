import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import useProps from "../hooks/useProps";

export function ButtonDetailsMatch({ match, labelId, func }) {
  const { language } = useProps();

  return (
    <ListItemButton onClick={func}>
      <ListItemAvatar>
        <Avatar
          variant="square"
          sx={{ width: 40, height: 40, marginRight: "10px" }}
          src={match.team_home_badge}
        />
      </ListItemAvatar>
      <Box style={{ fontSize: "23px" }}>
        {match.match_hometeam_score && match.match_hometeam_score}
        {match.match_hometeam_score ? ":" : "-"}
        {match.match_awayteam_score && match.match_awayteam_score}
      </Box>
      <Avatar
        variant="square"
        sx={{ width: 40, height: 40, marginLeft: "10px" }}
        src={match.team_away_badge}
      />
      <ListItemText
        id={labelId}
        sx={{
          display: { xs: "flex", sm: "flex" },
          color: "white",
          marginLeft: "20px",
        }}
        primary={
          (match.match_status == "Finished" && language
            ? "Finished"
            : "Koniec") ||
          (match.match_status == "After ET" && language
            ? "Finished"
            : "Koniec") ||
          (match.match_status == "Half Time" && language
            ? "Half-Time"
            : "Przerwa") ||
          (match.match_status.length && `🔴 ${match.match_status}'`) ||
          (!match.match_status.length &&
            `${match.match_time} | ${match.match_date}`)
        }
      />
    </ListItemButton>
  );
}
