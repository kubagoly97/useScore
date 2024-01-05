import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useProps from "../hooks/useProps";

export default function LeagueTable({ table, club }) {
  const { language } = useProps();

  const teamStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
    fontWeight: "100",
  };

  const statsStyle = {
    color: "white",
    fontWeight: "100",
  };

  return (
    <>
      {table[0].country_name === "eurocups" ? (
        <h3 style={{ color: "white" }}>
          {table[0].league_round} - {table[0].league_name}
        </h3>
      ) : (
        <></>
      )}
      <TableContainer
        component={Paper}
        style={{ backgroundColor: "#0D2818", boxShadow: "none" }}
      >
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow style={{ backgroundColor: "black" }}>
              <TableCell style={{ color: "white" }} align="left">
                {language ? "# Team name" : "# Klub"}
              </TableCell>
              <TableCell style={{ color: "white" }} align="right">
                M
              </TableCell>
              <TableCell style={{ color: "white" }} align="right">
                G
              </TableCell>
              <TableCell style={{ color: "white" }} align="right">
                P
              </TableCell>
            </TableRow>
          </TableHead>
          {table.length &&
            table.map((team, i) => (
              <TableBody key={i}>
                <TableRow
                  style={{
                    color: "white",
                    backgroundColor:
                      team.team_id === club.team_key &&
                      "rgba(32, 32, 145, 0.8)",
                  }}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    style={{ color: "white" }}
                    component="th"
                    scope="row"
                  >
                    {console.log(table)}
                    <span
                      style={{
                        padding: "3px",
                        borderRadius: "3px",
                        backgroundColor:
                          (team.overall_promotion.includes(
                            "Promotion - Champions League (Play Offs: 1/8-finals)"
                          ) &&
                            "blue") ||
                          (team.overall_promotion.includes(
                            "Promotion - Europa League (Play Offs: 1/16-finals)"
                          ) &&
                            "#913a20") ||
                          (team.overall_promotion.includes(
                            "Promotion - Europa League (Play Offs: 1/8-finals)"
                          ) &&
                            "#913a20") ||
                          (team.overall_promotion.includes(
                            "Promotion - Europa Conference League (Play Offs: 1/16-finals)"
                          ) &&
                            "#00ab36") ||
                          (team.overall_promotion.includes(
                            "Promotion - Europa Conference League (Play Offs: 1/8-finals)"
                          ) &&
                            "#00ab36") ||
                          (team.overall_promotion.includes("Qualifiers") &&
                            "blue") ||
                          (team.overall_promotion.includes("Promotion") &&
                            "blue") ||
                          (team.overall_promotion.includes("Relegation") &&
                            "red") ||
                          (team.overall_promotion.includes("Final Series") &&
                            "blue"),
                      }}
                    >
                      {team.overall_league_position}.
                    </span>
                    {"  "}
                    <img
                      src={team.team_badge}
                      alt={team.team_name}
                      className="BadgeInTable"
                    />{" "}
                    <a href={`/${team.team_id}`} style={teamStyle}>
                      {" "}
                      {team.team_name}
                    </a>
                  </TableCell>
                  <TableCell sx={statsStyle} align="right">
                    {team.overall_league_payed}
                  </TableCell>
                  <TableCell sx={statsStyle} align="right">
                    {team.overall_league_GF}:{team.overall_league_GA}
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "900" }}
                    align="right"
                  >
                    {team.overall_league_PTS}
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
        </Table>
      </TableContainer>
    </>
  );
}
