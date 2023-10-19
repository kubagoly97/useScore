import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function LeagueTable({ table, club }) {
  return (
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
                    (team.team_id == club.team_key &&
                      "rgba(0, 0, 255, 0.589)") ||
                    (Number(team.overall_league_position) >= table.length - 2 &&
                      "rgba(141, 0, 0, 0.589)"),
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
  );
}
