import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import useProps from "../hooks/useProps";
import { Link } from "react-router-dom";

export default function TopScorersTable({ topScorers }) {
  const { language, linkStyle } = useProps();

  const tableCellStyle = {
    color: "white",
    fontWeight: "400",
  };

  return (
    <>
      <TableContainer style={{ backgroundColor: "#0D2818", boxShadow: "none" }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow style={{ backgroundColor: "black" }}>
              <TableCell style={{ color: "white" }} align="left">
                {language ? `Player's Name` : "Zawodnik"}
              </TableCell>
              <TableCell style={{ color: "white" }} align="right">
                {language ? `Team` : "Zespół"}
              </TableCell>
              <TableCell style={{ color: "white" }} align="right">
                {language ? `Goals` : "Bramki"}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topScorers.map((scorer, i) => (
              <TableRow
                key={i}
                style={{
                  color: "white",
                }}
              >
                <TableCell
                  key={i}
                  style={{ color: "rgb(194, 194, 194)", fontWeight: "100" }}
                  component="th"
                  scope="row"
                >
                  {scorer.player_place}.
                  <Link
                    key={i}
                    to={`/player?play=${scorer.player_key}`}
                    style={linkStyle}
                  >
                    {" "}
                    {scorer.player_name}
                  </Link>
                </TableCell>
                <TableCell style={tableCellStyle} align="right">
                  <a key={i} href={`/${scorer.team_key}`} style={linkStyle}>
                    {scorer.team_name}
                  </a>
                </TableCell>
                <TableCell key={i} style={tableCellStyle} align="right">
                  {scorer.goals}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
