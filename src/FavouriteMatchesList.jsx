import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export default function FavouriteMatchesList({
  yourFollowingMatches,
  setYourFollowingMatches,
}) {
  return (
    <>
      <h1>Your games</h1>
      <List
        dense
        sx={{
          marginTop: "50px",
          flexGrow: 1,
          width: "100%",
          maxWidth: 360,
          backgroundColor: "rgba(0,0,0,0.4)",
          borderRadius: "6px",
          border: "2px dashed #0D2818",
        }}
      >
        {yourFollowingMatches.length &&
          yourFollowingMatches.map((match, i) => {
            const labelId = `checkbox-list-secondary-label-${match}`;
            return (
              <ListItem
                key={i}
                disablePadding
                secondaryAction={
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setYourFollowingMatches(
                        yourFollowingMatches.filter(
                          (m) => m.match_id !== match.match_id
                        )
                      );
                    }}
                  >
                    <DeleteForeverIcon
                      fontSize="large"
                      sx={{ color: "rgba(201, 26, 26,0.9)" }}
                    />
                  </button>
                }
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      sx={{ width: 40, height: 40, marginRight: "10px" }}
                      src={match.team_home_badge}
                    />
                  </ListItemAvatar>
                  <p style={{ fontSize: "23px" }}>
                    {match.match_hometeam_score
                      ? match.match_hometeam_score
                      : "- "}
                    :
                    {match.match_awayteam_score
                      ? match.match_awayteam_score
                      : " -"}
                  </p>
                  {/* <ListItemText
                  id={labelId}
                  sx={{ color: "white" }}
                  primary={match.match_awayteam_name}
                /> */}
                  <Avatar
                    variant="square"
                    sx={{ width: 40, height: 40, marginLeft: "10px" }}
                    src={match.team_away_badge}
                  />
                  <ListItemText
                    id={labelId}
                    sx={{ color: "white", marginLeft: "20px" }}
                    primary={
                      match.match_status !== "Finished"
                        ? `${match.match_time} | ${match.match_date}`
                        : `Finished`
                    }
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
    </>
  );
}
