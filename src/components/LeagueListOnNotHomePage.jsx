import * as React from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/system";
import { Subheader } from "./Subheader";
import { SwitchLanguageOnLeagueList } from "./SwitchLanguageOnLeagueList";

export default function LeaguesListOnNotHomePage({}) {
  const { user } = useAuthContext();
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
          <ListSubheader
            sx={{
              fontSize: "10px",
              bgcolor: "black",
              color: "white",
              fontWeight: "900",
              height: "30px",
              paddingBottom: "40px",
              borderBottom: "0.5px solid grey",
              textAlign: "center",
            }}
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <Box style={{ display: "inline-block", paddingTop: "5px" }}>
                <HomeIcon />
              </Box>
            </Link>
          </ListSubheader>
          {!user ? (
            <>
              <Subheader text="Login" to="/login" />
              <Subheader text="Register" to="/register" />
            </>
          ) : (
            <Subheader text={`${user.email}`} withLink={false} />
          )}
        </ul>
      </li>
    </List>
  );
}
