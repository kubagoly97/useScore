import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MatchDetailsOnHomePage from "./MatchDetailsOnHomePage";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export default function FavouriteMatchesList({
  yourFollowingMatches,
  setYourFollowingMatches,
}) {
  const { user } = useAuthContext();
  const [showDetails, setShowDetails] = useState(false);

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:4000/matchesList/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
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
                      handleDelete(match._id);
                      console.log(yourFollowingMatches);
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
