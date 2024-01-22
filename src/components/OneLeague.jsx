import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import useProps from "../hooks/useProps";
import { CountryBadge } from "./CountryBadge";

export function OneLeague({ league }) {
  const { fetchData, fetchTodaysGames, language } = useProps();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const expandStyle = { color: "rgb(209, 207, 207)" };
  return (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={{ borderBottom: "0.5px solid rgb(30, 30, 30)" }}
      >
        <CountryBadge src={league.countryBadge} />
        <ListItemText
          primary={
            language ? league.englishCountryName : league.polishCountryName
          }
          sx={{ color: "white" }}
        />
        {open ? (
          <ExpandLess sx={expandStyle} />
        ) : (
          <ExpandMore sx={expandStyle} />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {league.leagues.map((oneLeague, i) => (
            <ListItemButton
              onClick={() => {
                fetchData(oneLeague.leagueId);
                fetchTodaysGames(oneLeague.leagueId);
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText
                sx={{ color: "rgb(209, 207, 207)", fontWeight: "100" }}
                primary={oneLeague.leagueName}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}
