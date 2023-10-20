import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MatchDetailsOnHomePage from "./MatchDetailsOnHomePage";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
export default function FavouriteMatchesList({
  yourFollowingMatches,
  setYourFollowingMatches,
}) {
  const [showDetails, setShowDetails] = useState(false);
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
