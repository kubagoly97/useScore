import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

export function Subheader({
  text = "Subheader title",
  to = "/",
  withLink = true,
}) {
  return (
    <ListSubheader
      sx={{
        bgcolor: "black",
        textAlign: "center",
        color: "white",
        fontWeight: "900",
        height: "30px",
        paddingBottom: "45px",
        borderBottom: "0.5px solid grey",
      }}
    >
      <Link
        to={withLink && to}
        style={{ color: "white", textDecoration: "none" }}
      >
        <Box style={{ display: "inline-block", paddingTop: "5px" }}>{text}</Box>
      </Link>
    </ListSubheader>
  );
}
