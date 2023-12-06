import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#0D2818",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
}));

export function HeadToHead({ headToHead }) {
  return (
    <>
      {console.log(headToHead)}
      <Box sx={{ width: "100%" }}>
        <Stack spacing={0}>
          {headToHead.firstTeam_VS_secondTeam.length ? (
            headToHead.firstTeam_VS_secondTeam.map((match, i) => (
              <Item key={i}>
                <CalendarMonthIcon sx={{ width: "15px" }} />{" "}
                <span
                  style={{
                    fontWeight: "800",
                    borderRight: "0.5px solid white",
                    paddingRight: "5px",
                  }}
                >
                  {match.match_date.slice(0, 4)}
                </span>{" "}
                <img
                  src={match.team_home_badge}
                  alt=""
                  style={{ width: "15px", paddingLeft: "2px" }}
                />{" "}
                <a
                  href={`/${match.match_hometeam_id}`}
                  style={{
                    textDecoration: "none",
                    fontWeight:
                      Number(match.match_hometeam_score) >
                        Number(match.match_awayteam_score) && "800",
                    color:
                      Number(match.match_hometeam_score) >
                      Number(match.match_awayteam_score)
                        ? "#16DB65"
                        : "white",
                  }}
                >
                  {match.match_hometeam_name}
                </a>{" "}
                {match.match_hometeam_score}:{match.match_awayteam_score}{" "}
                <a
                  href={`/${match.match_awayteam_id}`}
                  style={{
                    textDecoration: "none",
                    fontWeight:
                      Number(match.match_awayteam_score) >
                        Number(match.match_hometeam_score) && "800",
                    color:
                      Number(match.match_awayteam_score) >
                      Number(match.match_hometeam_score)
                        ? "#16DB65"
                        : "white",
                  }}
                >
                  {" "}
                  {match.match_awayteam_name}
                </a>{" "}
                <img
                  src={match.team_away_badge}
                  alt=""
                  style={{ width: "15px" }}
                />{" "}
              </Item>
            ))
          ) : (
            <></>
          )}
        </Stack>
      </Box>
    </>
  );
}
