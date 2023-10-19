import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export default function ClubsList({
  yourClubsList,
  setYourClubsList,
  clubs,
  setIsOnList,
}) {
  return (
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
      {yourClubsList.length &&
        yourClubsList.map((club, i) => {
          const labelId = `checkbox-list-secondary-label-${club}`;
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
                    setYourClubsList(
                      yourClubsList.filter((c) => c.team_key !== club.team_key)
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
              <ListItemButton
                href={`/${club.team_key}`}
                onClick={() => {
                  {
                    clubs.map((c) => c.team_name).includes(club.team_name)
                      ? setIsOnList(true)
                      : setIsOnList(false);
                  }
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    sx={{ width: 70, height: 70, marginRight: "10px" }}
                    src={club.team_badge}
                  />
                </ListItemAvatar>
                <ListItemText
                  id={labelId}
                  sx={{ color: "white" }}
                  primary={club.team_name}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
    </List>
  );
}
