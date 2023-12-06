import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import useProps from "../hooks/useProps";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#0D2818",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
}));

export function HeadToHead({ club, headToHead }) {
  const { language } = useProps();
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={0}>
          {headToHead.firstTeam_VS_secondTeam.length ? (
            headToHead.firstTeam_VS_secondTeam.map((match, i) => (
              <Item key={i}>
                {language ? (
                  <>
                    <span
                      style={{
                        marginRight: "7px",
                        boxShadow: "1px black",
                        fontWeight: "900",
                        border:
                          match.match_hometeam_id === club.team_key
                            ? Number(match.match_hometeam_score) >
                              Number(match.match_awayteam_score)
                              ? "1px solid green"
                              : Number(match.match_hometeam_score) ==
                                Number(match.match_awayteam_score)
                              ? "1px solid grey"
                              : Number(match.match_hometeam_score) <
                                  Number(match.match_awayteam_score) &&
                                "1px solid red"
                            : Number(match.match_hometeam_score) <
                              Number(match.match_awayteam_score)
                            ? "1px solid green"
                            : Number(match.match_hometeam_score) ==
                              Number(match.match_awayteam_score)
                            ? "1px solid grey"
                            : Number(match.match_hometeam_score) >
                                Number(match.match_awayteam_score) &&
                              "1px solid red",
                        padding: "2px 7px 2px 7px",
                        backgroundColor:
                          match.match_hometeam_id === club.team_key
                            ? Number(match.match_hometeam_score) >
                              Number(match.match_awayteam_score)
                              ? "rgba(4, 181, 27, 0.4)"
                              : Number(match.match_hometeam_score) ==
                                Number(match.match_awayteam_score)
                              ? "rgba(99, 99, 99, 0.4)"
                              : Number(match.match_hometeam_score) <
                                  Number(match.match_awayteam_score) &&
                                "rgba(240, 5, 5, 0.4)"
                            : Number(match.match_hometeam_score) <
                              Number(match.match_awayteam_score)
                            ? "rgba(4, 181, 27, 0.4)"
                            : Number(match.match_hometeam_score) ==
                              Number(match.match_awayteam_score)
                            ? "rgba(99, 99, 99, 0.4)"
                            : Number(match.match_hometeam_score) >
                                Number(match.match_awayteam_score) &&
                              "rgba(240, 5, 5, 0.4)",
                        borderRadius: "3px",
                        color: "white",
                      }}
                    >
                      {match.match_hometeam_id === club.team_key
                        ? Number(match.match_hometeam_score) >
                          Number(match.match_awayteam_score)
                          ? "W"
                          : Number(match.match_hometeam_score) ==
                            Number(match.match_awayteam_score)
                          ? "D"
                          : Number(match.match_hometeam_score) <
                              Number(match.match_awayteam_score) && "L"
                        : Number(match.match_hometeam_score) <
                          Number(match.match_awayteam_score)
                        ? "W"
                        : Number(match.match_hometeam_score) ==
                          Number(match.match_awayteam_score)
                        ? "D"
                        : Number(match.match_hometeam_score) >
                            Number(match.match_awayteam_score) && "L"}
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      style={{
                        marginRight: "7px",
                        boxShadow: "1px black",
                        fontWeight: "900",
                        border:
                          match.match_hometeam_id === club.team_key
                            ? Number(match.match_hometeam_score) >
                              Number(match.match_awayteam_score)
                              ? "1px solid green"
                              : Number(match.match_hometeam_score) ==
                                Number(match.match_awayteam_score)
                              ? "1px solid grey"
                              : Number(match.match_hometeam_score) <
                                  Number(match.match_awayteam_score) &&
                                "1px solid red"
                            : Number(match.match_hometeam_score) <
                              Number(match.match_awayteam_score)
                            ? "1px solid green"
                            : Number(match.match_hometeam_score) ==
                              Number(match.match_awayteam_score)
                            ? "1px solid grey"
                            : Number(match.match_hometeam_score) >
                                Number(match.match_awayteam_score) &&
                              "1px solid red",
                        padding: "2px 7px 2px 7px",
                        backgroundColor:
                          match.match_hometeam_id === club.team_key
                            ? Number(match.match_hometeam_score) >
                              Number(match.match_awayteam_score)
                              ? "rgba(4, 181, 27, 0.4)"
                              : Number(match.match_hometeam_score) ==
                                Number(match.match_awayteam_score)
                              ? "rgba(99, 99, 99, 0.4)"
                              : Number(match.match_hometeam_score) <
                                  Number(match.match_awayteam_score) &&
                                "rgba(240, 5, 5, 0.4)"
                            : Number(match.match_hometeam_score) <
                              Number(match.match_awayteam_score)
                            ? "rgba(4, 181, 27, 0.4)"
                            : Number(match.match_hometeam_score) ==
                              Number(match.match_awayteam_score)
                            ? "rgba(99, 99, 99, 0.4)"
                            : Number(match.match_hometeam_score) >
                                Number(match.match_awayteam_score) &&
                              "rgba(240, 5, 5, 0.4)",
                        borderRadius: "3px",
                        color: "white",
                      }}
                    >
                      {match.match_hometeam_id === club.team_key
                        ? Number(match.match_hometeam_score) >
                          Number(match.match_awayteam_score)
                          ? "Z"
                          : Number(match.match_hometeam_score) ==
                            Number(match.match_awayteam_score)
                          ? "R"
                          : Number(match.match_hometeam_score) <
                              Number(match.match_awayteam_score) && "P"
                        : Number(match.match_hometeam_score) <
                          Number(match.match_awayteam_score)
                        ? "Z"
                        : Number(match.match_hometeam_score) ==
                          Number(match.match_awayteam_score)
                        ? "R"
                        : Number(match.match_hometeam_score) >
                            Number(match.match_awayteam_score) && "P"}
                    </span>
                  </>
                )}{" "}
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
            <span>{language ? "No data to display" : "Brak danych"}</span>
          )}
        </Stack>
      </Box>
    </>
  );
}
