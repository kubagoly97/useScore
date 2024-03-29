import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Blank from "/Blank.jpeg";
import useProps from "../hooks/useProps";

export default function TeamSquadOnBasicGrid2({ club, playersType }) {
  const replaceImage = (e) => {
    e.target.src = Blank;
  };
  const { language } = useProps();

  const tableHeadCell = [
    { cellText: "Matches" },
    { cellText: "Goals" },
    { cellText: "Rating" },
    { cellText: "🟨" },
    { cellText: "🟥" },
  ];

  const tableHeadCellPL = [
    { cellText: "Mecze" },
    { cellText: "Bramki" },
    { cellText: "Oceny" },
    { cellText: "🟨" },
    { cellText: "🟥" },
  ];

  const tableCellStyle = {
    color: "white",
    fontWeight: "100",
  };

  return (
    <>
      <TableContainer component={Paper} style={{ backgroundColor: "#0D2818" }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow style={{ backgroundColor: "black" }}>
              <TableCell style={{ color: "white" }} align="left">
                <img
                  src={club.team_badge}
                  alt=""
                  className="BadgeInTable"
                  style={{ width: "20px" }}
                />{" "}
                {language
                  ? playersType
                  : (playersType === "Goalkeepers" && "Bramkarze") ||
                    (playersType === "Defenders" && "Obrońcy") ||
                    (playersType === "Midfielders" && "Pomocnicy") ||
                    (playersType === "Forwards" && "Napastnicy")}
              </TableCell>
              {language
                ? tableHeadCell.map((tab, i) => (
                    <TableCell style={{ color: "white" }} align="right">
                      {tab.cellText}
                    </TableCell>
                  ))
                : tableHeadCellPL.map((tab, i) => (
                    <TableCell style={{ color: "white" }} align="right">
                      {tab.cellText}
                    </TableCell>
                  ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {club.players
              .filter((p) => p.player_type === playersType)
              .map((player, i) => (
                <TableRow
                  key={i}
                  style={{
                    color: "white",
                  }}
                >
                  <TableCell
                    style={{ color: "white" }}
                    component="th"
                    scope="row"
                  >
                    <img
                      src={player.player_image}
                      onError={replaceImage}
                      alt=""
                      className="BadgeInSquad"
                    />{" "}
                    <a
                      href={`player?play=${player.player_key}`}
                      style={{
                        color: "rgb(194, 194, 194)",
                        textDecoration: "none",
                        fontWeight: "300",
                        cursor: "pointer",
                      }}
                    >
                      {player.player_name}
                    </a>
                  </TableCell>
                  <TableCell style={tableCellStyle} align="right">
                    {player.player_match_played}
                  </TableCell>
                  <TableCell style={tableCellStyle} align="right">
                    {player.player_goals}
                  </TableCell>
                  <TableCell style={tableCellStyle} align="right">
                    {player.player_rating ? player.player_rating : "⏤"}
                  </TableCell>
                  <TableCell style={tableCellStyle} align="right">
                    {player.player_yellow_cards}
                  </TableCell>
                  <TableCell style={tableCellStyle} align="right">
                    {player.player_red_cards}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
