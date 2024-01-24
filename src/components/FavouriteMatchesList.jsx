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
      setYourFollowingMatches(yourFollowingMatches.filter((m) => m._id !== id));
    } else {
      console.log("ERROR");
    }
  };
  return (
    <>
      <List
        component="div"
        dense
        sx={{
          flexGrow: 1,
        }}
      >
        {yourFollowingMatches.length &&
          yourFollowingMatches
            .sort((a, b) => a.match_time.slice(3, 5) - b.match_time.slice(3, 5))
            .sort((a, b) => a.match_time.slice(0, 2) - b.match_time.slice(0, 2))
            .sort(
              (a, b) => a.match_date.slice(8, 10) - b.match_date.slice(8, 10)
            )
            .sort((a, b) => a.match_date.slice(5, 7) - b.match_date.slice(5, 7))
            .sort((a, b) => a.match_date.slice(0, 4) - b.match_date.slice(0, 4))
            .map((match, i) => {
              const labelId = `checkbox-list-secondary-label-${match}`;
              return (
                <ListItem
                  sx={{
                    borderBottom: "0.5px solid #0D2818",
                    padding: "2.5px 0px 2.5px 0px",
                  }}
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
                        sx={{ color: "rgba(201, 26, 26, 0.6)" }}
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
