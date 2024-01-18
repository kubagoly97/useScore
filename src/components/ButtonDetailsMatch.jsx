import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import { Box } from "@mui/system";
import useProps from "../hooks/useProps";
import CircleIcon from "@mui/icons-material/Circle";
import Grid from "@mui/material/Grid";

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
          {language
            ? (!match.match_status.length &&
                `${match.match_date.slice(8, 10)}-${match.match_date.slice(
                  5,
                  7
                )} | ${match.match_time}`) ||
              (match.match_status == "Finished" && "Finished") ||
              (match.match_status == "After ET" && "Finished") ||
              (match.match_status == "Aban." && "Postponed") ||
              (match.match_status == "Half Time" && "Half Time") ||
              (match.match_status.length && (
                <span style={{ fontSize: "22px", color: "white" }}>
                  <CircleIcon fontSize="small" sx={{ color: "red" }} />{" "}
                  {match.match_status}'
                </span>
              ))
            : (!match.match_status.length &&
                `${match.match_date.slice(8, 10)}-${match.match_date.slice(
                  5,
                  7
                )} | ${match.match_time}`) ||
              (match.match_status == "Finished" && "Koniec") ||
              (match.match_status == "Aban." && "Przełozony") ||
              (match.match_status == "After ET" && "Koniec") ||
              (match.match_status == "Half Time" && "Przerwa") ||
              (match.match_status.length && (
                <span style={{ fontSize: "22px", color: "white" }}>
                  <CircleIcon fontSize="small" sx={{ color: "red" }} />{" "}
                  {match.match_status}'
                </span>
              ))}
        </Grid>
      </Grid>
    </Box>
  );
}

{
  /* <ListItemAvatar>
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
      {language ? (
        <ListItemText
          id={labelId}
          sx={{
            display: { xs: "flex", sm: "flex" },
            color: "white",
            marginLeft: "20px",
          }}
          primary={
            (!match.match_status.length &&
              `${match.match_time} | ${match.match_date}`) ||
            (match.match_status == "Finished" && "Finished") ||
            (match.match_status == "After ET" && "Finished") ||
            (match.match_status == "Aban." && "Postponed") ||
            (match.match_status == "Half Time" && "Half Time") ||
            (match.match_status.length && `${match.match_status}'`)
          }
        />
      ) : (
        <ListItemText
          id={labelId}
          sx={{
            display: { xs: "flex", sm: "flex" },
            color: "white",
            marginLeft: "20px",
          }}
          primary={
            (!match.match_status.length &&
              `${match.match_time} | ${match.match_date}`) ||
            (match.match_status == "Finished" && "Koniec") ||
            (match.match_status == "Aban." && "Przełozony") ||
            (match.match_status == "After ET" && "Koniec") ||
            (match.match_status == "Half Time" && "Przerwa") ||
            (match.match_status.length && `🔴 ${match.match_status}'`)
          }
        />
      )} */
}
