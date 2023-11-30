import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MatchDetailsOnHomePage from "./MatchDetailsOnHomePage";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAuthContext } from "../hooks/useAuthContext";
import useProps from "../hooks/useProps";

export default function FavouriteMatchesList() {
  const { user } = useAuthContext();
  const { yourFollowingMatches, setYourFollowingMatches } = useProps();
  const handleDelete = async (id) => {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}matchesList/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const resJSON = await res.json();
    if (res.ok) {
      console.log(resJSON);
      setYourFollowingMatches(yourFollowingMatches.filter((m) => m._id !== id));
    } else {
      console.log("ERROR");
    }
  };
  return (
    <>
      <List
        dense
        sx={{
          flexGrow: 1,
          backgroundColor: "rgba(0,0,0,0.2)",
          borderTop: "2px dashed #0D2818",
          borderBottom: "2px dashed #0D2818",
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
                      handleDelete(match._id);
                    }}
                  >
                    <FavoriteIcon
                      fontSize="large"
                      sx={{ color: "rgba(201, 26, 26,0.9)" }}
                    />
                  </button>
                }
              >
                <MatchDetailsOnHomePage match={match} labelId={labelId} />
              </ListItem>
            );
          })}
      </List>
    </>
  );
}
