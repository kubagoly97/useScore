import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";

export function LeagueOnHomePageList({ primary, onClick }) {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  const leaguesStyle = {
    bgcolor: "black",
    paddingTop: "3px",
    paddingBottom: "3px",
    paddingLeft: "7px",
    color: "white",
    ":hover": {
      cursor: "pointer",
      bgcolor: "rgba(255,255,255,0.1)",
      color: "white",
    },
  };
  return (
    <ListItem sx={leaguesStyle}>
      <Link onClick={onClick} sx={linkStyle}>
        <ListItemText primary={primary} />
      </Link>
    </ListItem>
  );
}
