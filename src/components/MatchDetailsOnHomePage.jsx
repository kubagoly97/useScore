import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { ButtonDetailsMatch } from "./ButtonDetailsMatch";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { LineUpsMatchDetails } from "./LineUpsMatchDetails";
import { useState, useEffect } from "react";

export const Item = styled(Paper)(({ theme }) => ({
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
  const [matchInfo, setMatchInfo] = useState({});

  useEffect(() => {
    const fetchMatchInfo = async () => {
      const res = await fetch(
        `https://apiv3.apifootball.com/?action=get_events&match_id=${
          match.match_id
        }&APIkey=${import.meta.env.VITE_API_KEY}`
      );
      const resJSON = await res.json();
      setMatchInfo(resJSON);
    };
    fetchMatchInfo();
    setInterval(() => {
      fetchMatchInfo();
    }, 5000);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {matchInfo.length && (
        <>
          <ButtonDetailsMatch
            component={"div"}
            match={matchInfo[0]}
            labelId={labelId}
            func={handleClickOpen}
          />
          <Dialog
            component="div"
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle
              component={"div"}
              sx={{
                backgroundColor: "black",
                color: "white",
              }}
            >
              <img
                src={matchInfo[0].team_home_badge}
                alt=""
                style={{ width: "30px" }}
              />
              {` ${matchInfo[0].match_hometeam_name} ${
                matchInfo[0].match_hometeam_score &&
                matchInfo[0].match_hometeam_score
              }-${
                matchInfo[0].match_awayteam_score &&
                matchInfo[0].match_awayteam_score
              } ${matchInfo[0].match_awayteam_name} `}
              <img
                src={matchInfo[0].team_away_badge}
                alt=""
                style={{ width: "30px" }}
              />
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "black", color: "white" }}>
              <DialogContentText
                component={"div"}
                id="alert-dialog-slide-description"
                sx={{ backgroundColor: "black", color: "white" }}
              >
                <p
                  style={{
                    marginTop: "0px",
                    borderBottom: "0.5px solid #04471C",
                  }}
                >
                  {matchInfo[0].match_date}, {matchInfo[0].match_time}
                </p>
                <p style={{ fontSize: "12px" }}>
                  <img
                    src={matchInfo[0].league_logo}
                    alt={matchInfo[0].league_name}
                    style={{ width: "25px", borderRadius: "3px" }}
                  />{" "}
                  {matchInfo[0].league_name}, {matchInfo[0].match_round}. round
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    borderBottom: "0.5px solid #04471C",
                    paddingBottom: "3px",
                  }}
                >
                  {matchInfo[0].country_name === "eurocups" ? (
                    ""
                  ) : (
                    <img
                      src={matchInfo[0].country_logo}
                      alt={matchInfo[0].country_name}
                      style={{ width: "30px", borderRadius: "3px" }}
                    />
                  )}{" "}
                  {matchInfo[0].country_name === "eurocups"
                    ? ""
                    : matchInfo[0].country_name}
                </p>
                {matchInfo[0].match_status === "Postponed" && (
                  <h2>Postponed</h2>
                )}
                {matchInfo[0].match_status.length ? (
                  <LineUpsMatchDetails match={matchInfo[0]} />
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
        </>
      )}
    </>
  );
}
