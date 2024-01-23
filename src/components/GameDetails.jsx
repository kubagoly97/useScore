import * as React from "react";
import Box from "@mui/material/Box";
import { LeagueDetailsInMatchComponent } from "./LeagueDetailsInMatchComponent";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from "react";
import useProps from "../hooks/useProps";
import SwitchGameDetails from "./SwitchGameDetails";

export function GameDetails({
  match,
  handleShowTable,
  handleFetch,
  setTable,
  club,
  setShowTable,
  showTable,
  setTopScorers,
}) {
  const { user } = useAuthContext();
  const {
    setYourFollowingMatches,
    yourFollowingMatches,
    value,
    handleAddMatchOnYourFavouriteList,
  } = useProps();

  const [headToHead, setHeadToHead] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // const handleAddMatchOnYourFavouriteList = async () => {
  //   const team_home_badge = match.team_home_badge;
  //   const team_away_badge = match.team_away_badge;
  //   const match_hometeam_score = match.match_hometeam_score;
  //   const match_awayteam_score = match.match_awayteam_score;
  //   const match_date = match.match_date;
  //   const match_time = match.match_time;
  //   const match_id = match.match_id;
  //   setYourFollowingMatches([
  //     ...yourFollowingMatches,
  //     {
  //       team_home_badge: match.team_home_badge,
  //       team_away_badge: match.team_away_badge,
  //       match_hometeam_score: match.match_hometeam_score,
  //       match_awayteam_score: match.match_awayteam_score,
  //       match_date: match.match_date,
  //       match_time: match.match_time,
  //       match_id: match.match_id,
  //     },
  //   ]);
  //   const res = await fetch(`${import.meta.env.VITE_BASE_URL}matchesList`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       team_home_badge,
  //       team_away_badge,
  //       match_hometeam_score,
  //       match_awayteam_score,
  //       match_date,
  //       match_time,
  //       match_id,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${user.token}`,
  //     },
  //   });
  //   const json = await res.json();
  // };

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
    if (res.ok) {
      setYourFollowingMatches(yourFollowingMatches.filter((c) => c._id !== id));
    } else {
      console.log("ERROR");
    }
  };

  useEffect(() => {
    function isThisTeam(team) {
      return team.team_id === club.team_key;
    }
    const fetchTab = async () => {
      const url = `https://apiv3.apifootball.com/?action=get_standings&league_id=${
        match.league_id
      }&APIkey=${import.meta.env.VITE_API_KEY}`;
      const res = await fetch(url);
      const resJSON = await res.json();
      if (resJSON.find(isThisTeam).country_name === "eurocups") {
        let findTeam = resJSON.find(isThisTeam).overall_league_position;
      } else {
        setTable(resJSON);
      }
    };
    fetchTab();
  }, [showTable]);

  useEffect(() => {
    async function fetchH2H() {
      setIsLoading(true);
      const url = `https://apiv3.apifootball.com/?action=get_H2H&firstTeamId=${
        match.match_hometeam_id
      }&secondTeamId=${match.match_awayteam_id}&APIkey=${
        import.meta.env.VITE_API_KEY
      }
      `;
      const res = await fetch(url);
      const resJSON = await res.json();
      setHeadToHead(resJSON);
      setIsLoading(false);
    }
    fetchH2H();
  }, [value]);

  useEffect(() => {
    const fetchTopScorers = async () => {
      const res = await fetch(
        `https://apiv3.apifootball.com/?action=get_topscorers&league_id=${
          match.league_id
        }&APIkey=${import.meta.env.VITE_API_KEY}`
      );
      const resJSON = await res.json();
      setTopScorers(resJSON);
    };
    fetchTopScorers();
  });

  const teamNameStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "400",
  };

  return (
    <div className="GameDetails">
      <div className="ClubVsClub">
        <LeagueDetailsInMatchComponent
          handleShowTable={handleShowTable}
          match={match}
          setShowTable={setShowTable}
        />
        <h1>
          <a style={teamNameStyle} href={`/${match.match_hometeam_id}`}>
            {" "}
            {match.match_hometeam_name}
          </a>{" "}
          -{" "}
          <a href={`/${match.match_awayteam_id}`} style={teamNameStyle}>
            {match.match_awayteam_name}
          </a>
          {user ? (
            <Button
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
                  handleAddMatchOnYourFavouriteList(match);
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
            </Button>
          ) : (
            <></>
          )}
        </h1>
        <Box
          sx={{
            textAlign: "left",
            paddingRight: "none",
            width: "100%",
            paddingTop: "10px",
            paddingBottom: "10px",
            backgroundColor: "rgba(0,0,0,0.6)",
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
            backgroundColor: "rgba(0,0,0,0.6)",
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
          }}
        >
          {match.match_hometeam_score ? match.match_hometeam_score : " - "}:
          {match.match_awayteam_score ? match.match_awayteam_score : " - "}
        </h1>
        <h2 style={{ fontWeight: "100" }}>
          {`(${
            match.match_hometeam_halftime_score
              ? match.match_hometeam_halftime_score
              : " - "
          }:${
            match.match_awayteam_halftime_score
              ? match.match_awayteam_halftime_score
              : " - "
          })`}
        </h2>
        <SwitchGameDetails
          match={match}
          headToHead={headToHead}
          isHLoading={isLoading}
          club={club}
        />
      </div>
    </div>
  );
}
