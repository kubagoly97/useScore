import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Blank from "/Blank.jpeg";

export default function TeamSquadOnBasicGrid2({ club, playersType }) {
  const replaceImage = (e) => {
    e.target.src = Blank;
  };

  const tableHeadCell = [
    { cellText: "Matches" },
    { cellText: "Goals" },
    { cellText: "Rating" },
    { cellText: "🟨" },
    { cellText: "🟥" },
  ];

  console.log(club);
  return (
    <>
      <TableContainer component={Paper} style={{ backgroundColor: "#0D2818" }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow style={{ backgroundColor: "black" }}>
              <TableCell style={{ color: "white" }} align="left">
                <img src={club.team_badge} alt="" className="BadgeInTable" />{" "}
                {playersType}
              </TableCell>
              {tableHeadCell.map((tab, i) => (
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
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      {player.player_name}
                    </a>
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {player.player_match_played}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {player.player_goals}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {player.player_rating ? player.player_rating : "⏤"}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {player.player_yellow_cards}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
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
