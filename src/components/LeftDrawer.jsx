import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import LeaguesList from "./LeaguesList";
import LeaguesListOnNotHomePage from "./LeagueListOnNotHomePage";
import { useState, useContext } from "react";
import { Context } from "../context/Context";

export default function LeftDrawer() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { homePageFootballBar } = useContext(Context);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 170,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {homePageFootballBar ? (
        <>
          <LeaguesList />
        </>
      ) : (
        <LeaguesListOnNotHomePage />
      )}
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon
            sx={{
              color: "white",
            }}
          />
        </Button>
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "black",
            },
          }}
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
