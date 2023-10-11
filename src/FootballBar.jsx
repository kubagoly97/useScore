import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function FootballBar() {
  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: "6px",
        backgroundColor: "#04471C",
        border: "2px dashed #0D2818",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            href="/"
            variant="h4"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            ⚽️ useScore
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
