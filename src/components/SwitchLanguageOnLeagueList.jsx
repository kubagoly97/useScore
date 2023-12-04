import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import { Box } from "@mui/system";
import LanguageSwitch from "./LanguageSwitch";

export function SwitchLanguageOnLeagueList() {
  return (
    <ListSubheader
      sx={{
        bgcolor: "rgba(22, 219, 101, 0.5)",
        textAlign: "center",
        color: "white",
        fontWeight: "900",
        height: "30px",
        paddingBottom: "45px",
        borderBottom: "0.5px solid grey",
      }}
    >
      <Box
        style={{
          display: "inline-block",
          paddingTop: "5px",
        }}
      >
        <LanguageSwitch />
      </Box>
    </ListSubheader>
  );
}
