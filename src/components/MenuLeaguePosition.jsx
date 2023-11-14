import * as React from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

export function MenuLeaguePosition({
  leagueName = "League Name",
  func,
  handleCloseNavMenu,
}) {
  return (
    <MenuItem
      onClick={() => {
        func();
        handleCloseNavMenu();
      }}
    >
      <Typography textAlign="center">{leagueName}</Typography>
    </MenuItem>
  );
}
