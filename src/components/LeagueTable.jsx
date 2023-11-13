import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";

export default function LeagueTable({ table, club }) {
  return (
    <>
      {table[0].country_name === "eurocups" ? (
        <h3 style={{ color: "white" }}>
          {table[0].league_round} - {table[0].league_name}
        </h3>
      ) : (
        <></>
      )}
      <TableContainer component={Paper} style={{ backgroundColor: "#0D2818" }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow style={{ backgroundColor: "black" }}>
              <TableCell style={{ color: "white" }} align="left">
                # Team name
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
                      ((!team.league_name === "UEFA Champions League"
                        ? Number(team.overall_league_position) >=
                            table.length - 2 && "rgba(141, 0, 0, 0.589)"
                        : team.overall_promotion ===
                            "Promotion - Champions League (Play Offs: 1/8-finals)" &&
                          "rgba(232, 196, 35,0.3)") &&
                        team.overall_promotion ===
                          "Promotion - Europa League (Play Offs: 1/16-finals)" &&
                        "rgba(79, 8, 11, 0.4)") ||
                      (team.league_name === "UEFA Europa League" &&
                        team.overall_promotion ===
                          "Promotion - Europa League (Play Offs: 1/8-finals)" &&
                        "rgba(232, 196, 35,0.3)") ||
                      (team.overall_promotion ===
                        "Promotion - Europa League (Play Offs: 1/16-finals)" &&
                        "rgba(232, 196, 35,0.3)") ||
                      (team.overall_promotion ===
                        "Promotion - Europa Conference League (Play Offs: 1/16-finals)" &&
                        "rgba(79, 8, 11, 0.4)") ||
                      (team.team_id == club.team_key &&
                        "rgba(0, 0, 255, 0.589)"),
                  }}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    style={{ color: "white" }}
                    component="th"
                    scope="row"
                  >
                    {team.overall_league_position}.{"  "}
                    <img
                      src={team.team_badge}
                      alt={team.team_name}
                      className="BadgeInTable"
                    />{" "}
                    <a
                      href={`/${team.team_id}`}
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      {team.team_name}
                    </a>
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {team.overall_league_payed}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {team.overall_league_GF}:{team.overall_league_GA}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
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
