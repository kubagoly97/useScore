import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import LeaguesList from "./LeaguesList";
import { useAuthContext } from "../hooks/useAuthContext";
import LeaguesListOnNotHomePage from "./LeagueListOnNotHomePage";

export default function LeftDrawer({
  setShowClubList,
  fetchEnglishData,
  fetchSpainData,
  fetchSpain2Data,
  fetchGermanyData,
  fetchEkstraklasaData,
  fetch2BundesligaData,
  fetch1LigaData,
  fetchSerieAData,
  fetchChampionshipData,
  fetchLigueOneData,
  fetch2LigaData,
  fetchSwitzerlandData,
  fetchSerieBData,
  fetchCroatiaData,
  homePageFootballBar,
}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
          <LeaguesList
            setShowClubList={setShowClubList}
            fetchEnglishData={fetchEnglishData}
            fetchSpainData={fetchSpainData}
            fetchSpain2Data={fetchSpain2Data}
            fetchGermanyData={fetchGermanyData}
            fetchEkstraklasaData={fetchEkstraklasaData}
            fetch2BundesligaData={fetch2BundesligaData}
            fetch1LigaData={fetch1LigaData}
            fetchSerieAData={fetchSerieAData}
            fetchChampionshipData={fetchChampionshipData}
            fetchLigueOneData={fetchLigueOneData}
            fetch2LigaData={fetch2LigaData}
            fetchSwitzerlandData={fetchSwitzerlandData}
            fetchSerieBData={fetchSerieBData}
            homePageFootballBar={homePageFootballBar}
            fetchCroatiaData={fetchCroatiaData}
          />
        </>
      ) : (
        <>
          <LeaguesListOnNotHomePage />
        </>
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
