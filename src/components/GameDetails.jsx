import * as React from "react";
import Box from "@mui/material/Box";
import { Scorers } from "./Scorers";
import { LeagueDetailsInMatchComponent } from "./LeagueDetailsInMatchComponent";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAuthContext } from "../hooks/useAuthContext";

export function GameDetails({
  match,
  handleShowTable,
  yourFollowingMatches,
  setYourFollowingMatches,
  handleFetch,
}) {
  const { user } = useAuthContext();

  const handleAddMatchOnYourFavouriteList = async () => {
    const team_home_badge = match.team_home_badge;
    const team_away_badge = match.team_away_badge;
    const match_hometeam_score = match.match_hometeam_score;
    const match_awayteam_score = match.match_awayteam_score;
    const match_date = match.match_date;
    const match_time = match.match_time;
    const match_id = match.match_id;
    setYourFollowingMatches([
      ...yourFollowingMatches,
      {
        team_home_badge: match.team_home_badge,
        team_away_badge: match.team_away_badge,
        match_hometeam_score: match.match_hometeam_score,
        match_awayteam_score: match.match_awayteam_score,
        match_date: match.match_date,
        match_time: match.match_time,
        match_id: match.match_id,
      },
    ]);
    const res = await fetch("http://localhost:4000/matchesList", {
      method: "POST",
      body: JSON.stringify({
        team_home_badge,
        team_away_badge,
        match_hometeam_score,
        match_awayteam_score,
        match_date,
        match_time,
        match_id,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await res.json();
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:4000/matchesList/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (res.ok) {
      setYourFollowingMatches(yourFollowingMatches.filter((c) => c._id !== id));
    } else {
      console.log("ERROR");
    }
  };

  return (
    <div className="GameDetails">
      <div className="ClubVsClub">
        {console.log(yourFollowingMatches)}
        <LeagueDetailsInMatchComponent
          handleShowTable={handleShowTable}
          match={match}
        />
        <h1>
          <a
            style={{
              color: "white",
              textDecoration: "none",
            }}
            href={`/${match.match_hometeam_id}`}
          >
            {" "}
            {match.match_hometeam_name}
          </a>{" "}
          -{" "}
          <a
            href={`/${match.match_awayteam_id}`}
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {match.match_awayteam_name}
          </a>
          {user ? ( <Button
            onClick={() => {
              if (
                yourFollowingMatches
                  .map((m) => m.match_id)
                  .includes(match.match_id)
              ) {
                {
                  handleDelete(
                    yourFollowingMatches.find(
                      ({ match_id }) => match_id === match.match_id
                    )._id
                  );
                }
              } else {
                handleFetch(match.match_id);
                handleAddMatchOnYourFavouriteList();
              }
            }}
          >
            {yourFollowingMatches
              .map((m) => m.match_id)
              .includes(match.match_id) ? (
              <FavoriteIcon fontSize="large" sx={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon fontSize="large" sx={{ color: "white" }} />
            )}
          </Button>):(<></>) }
         
        </h1>
        <Box
          sx={{
            textAlign: "left",
            paddingRight: "none",
            width: "100%",
            paddingTop: "10px",
            paddingBottom: "10px",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
          }}
        >
          <a href={`/${match.match_hometeam_id}`}>
            <img
              src={match.team_home_badge}
              alt={match.team_home_badge}
              style={{
                borderRadius: "2px",
                paddingLeft: "60px",
              }}
            />
          </a>
          <a href={`/${match.match_awayteam_id}`}>
            <img
              style={{
                textAlign: "right",
                float: "right",
                borderRadius: "2px",
                paddingRight: "60px",
              }}
              src={match.team_away_badge}
              alt={match.team_away_badge}
            />
          </a>
        </Box>
        <h1
          style={{
            fontSize: "50px",
            paddingTop: "10px",
            paddingBottom: "10px",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
          }}
        >
          {match.match_hometeam_score ? match.match_hometeam_score : " - "}:
          {match.match_awayteam_score ? match.match_awayteam_score : " - "}
        </h1>
        <h3>
          {`(${
            match.match_hometeam_halftime_score
              ? match.match_hometeam_halftime_score
              : " - "
          }:${
            match.match_awayteam_halftime_score
              ? match.match_awayteam_halftime_score
              : " - "
          })`}
        </h3>
        <Scorers match={match} />
        <h4>
          Referee:{" "}
          {match.match_referee
            ? match.match_referee
            : "More details before the game"}
        </h4>
        <h5>{match.match_stadium}</h5>
        <h6>{match.match_status}</h6>
      </div>
    </div>
  );
}