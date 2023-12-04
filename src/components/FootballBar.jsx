import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import LeftDrawer from "./LeftDrawer";
import useProps from "../hooks/useProps";
import LanguageSwitch from "./LanguageSwitch";

export default function FootballBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        borderRadius: "6px",
        background: "linear-gradient(2deg,#0D2818, #058C42 )",
        border: "2px dashed #0D2818",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <SportsSoccerIcon
              fontSize="large"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            useScore
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none", md: "none" },
            }}
          >
            <LeftDrawer />
          </Box>

          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "flex", md: "none" },
              flexGrow: 1,
              textAlign: "left",
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {" "}
            <SportsSoccerIcon
              fontSize="large"
              sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}
            />
            useScore
          </Typography>
          {/* <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", sm: "flex", md: "flex" },
                justify: "space-beetwen",
              }}
            > */}
          <LanguageSwitch />
          {/* </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
