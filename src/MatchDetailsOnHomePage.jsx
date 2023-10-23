import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { ButtonDetailsMatch } from "./ButtonDetailsMatch";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function MatchDetailsOnHomePage({ match, labelId }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ButtonDetailsMatch
        match={match}
        labelId={labelId}
        func={handleClickOpen}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ backgroundColor: "black", color: "white" }}>
          <img src={match.team_home_badge} alt="" style={{ width: "30px" }} />
          {` ${match.match_hometeam_name} ${
            match.match_hometeam_score && match.match_hometeam_score
          }-${match.match_awayteam_score && match.match_awayteam_score} ${
            match.match_awayteam_name
          } `}
          <img src={match.team_away_badge} alt="" style={{ width: "30px" }} />
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "black", color: "white" }}>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ backgroundColor: "black", color: "white" }}
          >
            <p
              style={{ marginTop: "0px", borderBottom: "0.5px solid #04471C" }}
            >
              {match.match_date}, {match.match_time}
            </p>
            <p style={{ fontSize: "12px" }}>
              <img
                src={match.league_logo}
                alt={match.league_name}
                style={{ width: "25px", borderRadius: "3px" }}
              />{" "}
              {match.league_name}, {match.match_round}. round
            </p>
            <p
              style={{
                fontSize: "12px",
                borderBottom: "0.5px solid #04471C",
                paddingBottom: "3px",
              }}
            >
              {match.country_name === "eurocups" ? (
                ""
              ) : (
                <img
                  src={match.country_logo}
                  alt={match.country_name}
                  style={{ width: "30px", borderRadius: "3px" }}
                />
              )}
              {match.country_name === "eurocups" ? "" : match.country_name}
            </p>
            {match.match_status === "Postponed" && <h2>Postponed</h2>}
            {match.match_status === "Finished" ? (
              <LineUpsMatchDetails match={match} />
            ) : (
              <></>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "black", color: "white" }}>
          <Button onClick={handleClose} sx={{ color: "#058C42" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function LineUpsMatchDetails({ match }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Item sx={{ backgroundColor: "black", color: "white" }}>
              <div
                style={{
                  borderBottom: "0.5px solid #04471C",
                  paddingBottom: "3px",
                }}
              >
                <img
                  src={match.team_home_badge}
                  alt=""
                  style={{ width: "11px" }}
                />{" "}
                {match.match_hometeam_name}
              </div>
              <ul style={{ listStyleType: "none", textAlign: "left" }}>
                {match.lineup.home.starting_lineups.map((player, i) => (
                  <li key={i}>
                    <div>
                      {Number(player.lineup_number) !== 0 &&
                        player.lineup_number}{" "}
                      <span style={{ color: "green" }}>|</span>{" "}
                      <Link
                        to={`player?play=${player.player_key}`}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        {player.lineup_player
                          .split(" ")
                          .splice(0, 1)
                          .toString()
                          .slice(0, 1)}
                        .{" "}
                        {player.lineup_player
                          .split(" ")
                          .splice(1, 2)
                          .toString()}{" "}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
              <span>
                Manager:{" "}
                {match.lineup.home.coach.length
                  ? match.lineup.home.coach[0].lineup_player
                  : ""}
              </span>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item sx={{ backgroundColor: "black", color: "white" }}>
              <div
                style={{
                  borderBottom: "0.5px solid #04471C",
                  paddingBottom: "3px",
                }}
              >
                <img
                  src={match.team_away_badge}
                  alt=""
                  style={{ width: "11px" }}
                />{" "}
                {match.match_awayteam_name}
              </div>
              <ul style={{ listStyleType: "none", textAlign: "left" }}>
                {match.lineup.away.starting_lineups.map((player, i) => (
                  <li key={i}>
                    {Number(player.lineup_number) !== 0 && player.lineup_number}{" "}
                    <span style={{ color: "green" }}>|</span>{" "}
                    <Link
                      to={`player?play=${player.player_key}`}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {player.lineup_player
                        .split(" ")
                        .splice(0, 1)
                        .toString()
                        .slice(0, 1)}
                      .{" "}
                      {player.lineup_player.split(" ").splice(1, 2).toString()}
                    </Link>
                  </li>
                ))}
              </ul>
              <span>
                Manager:{" "}
                {match.lineup.away.coach.length
                  ? match.lineup.away.coach[0].lineup_player
                  : ""}
              </span>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <p
        style={{
          fontSize: "12px",
          borderBottom: "0.5px solid #04471C",
          paddingBottom: "3px",
        }}
      >
        Details
      </p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Item sx={{ backgroundColor: "black", color: "white" }}>
              <div style={{ borderRight: "0.5px solid #04471C" }}>
                {match.goalscorer.length ? <span>Goal scorers:</span> : ""}
                <ul style={{ listStyleType: "none", textAlign: "left" }}>
                  {match.goalscorer.map((scorer, i) => (
                    <li
                      style={{
                        color: scorer.home_scorer ? "green" : "red",
                      }}
                    >
                      <img
                        style={{ width: "16px", marginRight: "5px" }}
                        src={
                          scorer.home_scorer.length
                            ? match.team_home_badge
                            : match.team_away_badge
                        }
                        alt=""
                      />
                      {scorer.time}'{" "}
                      {scorer.home_scorer.length
                        ? scorer.home_scorer
                        : scorer.away_scorer}
                    </li>
                  ))}
                </ul>
              </div>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item sx={{ backgroundColor: "black", color: "white" }}>
              <div>
                <span>Referee: {match.match_referee}</span>
                <p>Stadium: {match.match_stadium}</p>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
