import * as React from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/system";
import { Subheader } from "./Subheader";
import useProps from "../hooks/useProps";
import { YouTubeLink } from "./YouTubeLink";
import { CountrySectionOnLeagueList } from "./CountrySectionOnLeagueList";

export default function LeaguesList() {
  const { user } = useAuthContext();
  const { setShowClubList, language, everyLeagues, linkStyle } = useProps();
  const { logout } = useLogout();

  const subheaderStyle = {
    bgcolor: "black",
    textAlign: "center",
    color: "white",
    height: "30px",
    paddingBottom: "40px",
    borderBottom: "0.5px solid grey",
    fontWeight: "500",
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "100%",
        bgcolor: "black",
        position: "relative",
        overflow: "auto",
        maxHeight: 700,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      <li>
        <ul>
          {user ? (
            <>
              <ListSubheader sx={subheaderStyle}>
                <Link onClick={() => setShowClubList(false)} style={linkStyle}>
                  <Box style={{ display: "inline-block", paddingTop: "5px" }}>
                    <HomeIcon />
                  </Box>
                </Link>
              </ListSubheader>
            </>
          ) : (
            <>
              <Subheader
                text={language ? "Login" : "Zaloguj się"}
                to="/login"
              />
              <Subheader
                text={language ? "Register" : "Zarejestruj się"}
                to="/register"
              />
            </>
          )}
          {everyLeagues.map((league, i) => (
            <CountrySectionOnLeagueList
              key={i}
              countryBadge={league.countryBadge}
              englishCountryName={league.englishCountryName}
              polishCountryName={league.polishCountryName}
              leagues={league.leagues}
            />
          ))}
          <YouTubeLink />
          {user && (
            <ListSubheader sx={subheaderStyle}>
              <Link
                onClick={() => {
                  logout();
                  window.location.reload();
                }}
                style={linkStyle}
              >
                <Box style={{ display: "inline-block", paddingTop: "5px" }}>
                  {language ? "Logout" : "Wyloguj"}
                </Box>
              </Link>
            </ListSubheader>
          )}
        </ul>
      </li>
    </List>
  );
}
