import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import { useAuthContext } from "../hooks/useAuthContext";
import { useContext } from "react";
import { Context } from "./App";

export default function ClubsList() {
  const { user } = useAuthContext();
  const { yourClubsList, setYourClubsList } = useContext(Context);

  const handleDelete = async (id) => {
    const res = await fetch(
      `https://use-score-backend.onrender.com/clubList/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const resJSON = await res.json();
    console.log(resJSON);
    if (res.ok) {
      setYourClubsList(yourClubsList.filter((c) => c._id !== id));
    } else {
      console.log("ERROR");
    }
  };

  return (
    <>
      <List
        component={"ul"}
        dense
        sx={{
          paddingLeft: "0px",
          marginTop: "10px",
          flexGrow: 1,
          width: "100%",
          maxWidth: "100%",
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
                component="span"
                key={i}
                disablePadding
                secondaryAction={
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDelete(club._id)}
                  >
                    <StarIcon
                      fontSize="large"
                      sx={{ color: "rgba(255, 223, 0,1)" }}
                    />
                  </button>
                }
              >
                <ListItemButton href={`/${club.team_key}`}>
                  <ListItemAvatar>
                    <Avatar
                      component="span"
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
    </>
  );
}
