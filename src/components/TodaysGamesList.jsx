import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { FixedSizeList } from "react-window";
import useProps from "../hooks/useProps";
import Grid from "@mui/material/Grid";
import { MatchStatus } from "./MatchStatus";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useAuthContext } from "../hooks/useAuthContext";
import Button from "@mui/material/Button";

function renderRow(props) {
  const { index, style, data } = props;

  const matchStyle = {
    textAlign: "center",
    color: "white",
    fontWeight: "100",
  };
  const { linkStyle, language, handleAddMatchOnYourFavouriteList } = useProps();
  const { user } = useAuthContext();

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <Grid container spacing={2}>
          {user ? (
            <Grid item xs={1}>
              <AddCircleOutlineIcon
              // onClick={() => handleAddMatchOnYourFavouriteList(data[index])}
              />
            </Grid>
          ) : (
            <></>
          )}
          <Grid item xs={2} sx={matchStyle}>
            {language ? (
              <MatchStatus
                match={data[index]}
                finished={"Finish."}
                postponed={"Post."}
                halfTime={"Half Time"}
                favourites={false}
              />
            ) : (
              <MatchStatus
                match={data[index]}
                finished={"Koniec"}
                postponed={"Przeł."}
                halfTime={"Przerwa"}
                favourites={false}
              />
            )}
          </Grid>
          <Grid item xs={1}>
            <img
              src={data[index].team_home_badge}
              alt=""
              style={{ width: "25px" }}
            />
          </Grid>
          <Grid item xs={user ? 7 : 6} sx={matchStyle}>
            <a href={`/${data[index].match_hometeam_id}`} style={linkStyle}>
              {data[index].match_hometeam_name}
            </a>{" "}
            {data[index].match_hometeam_score}-
            {data[index].match_awayteam_score}{" "}
            <a href={`/${data[index].match_awayteam_id}`} style={linkStyle}>
              {data[index].match_awayteam_name}
            </a>
          </Grid>
          <Grid item xs={1}>
            <img
              src={data[index].team_away_badge}
              alt=""
              style={{ width: "25px" }}
            />
          </Grid>
        </Grid>
      </ListItemButton>
    </ListItem>
  );
}

export default function TodaysGamesList() {
  const { todaysGames } = useProps();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 49 * todaysGames.length,
          // maxWidth: 360,
          bgcolor: "none",
          marginTop: "10px",
        }}
      >
        <FixedSizeList
          height={50 * todaysGames.length}
          // width={390}
          itemSize={40}
          itemCount={todaysGames.length}
          overscanCount={5}
          itemData={todaysGames}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
    </>
  );
}
