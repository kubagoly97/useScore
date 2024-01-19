import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { FixedSizeList } from "react-window";
import useProps from "../hooks/useProps";
import Grid from "@mui/material/Grid";

function renderRow(props) {
  const { index, style, data } = props;
  const matchStyle = {
    textAlign: "center",
    color: "white",
    fontWeight: "100",
  };
  const { linkStyle } = useProps();

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        {console.log("itemData: ", data)}
        <Grid container spacing={2}>
          <Grid item xs={2} sx={matchStyle}>
            {!data[index].match_status.length
              ? data[index].match_time
              : `${data[index].match_status}`}
            {data[index].match_status === "1" && "'"}
          </Grid>
          <Grid item xs={1}>
            <img
              src={data[index].team_home_badge}
              alt=""
              style={{ width: "25px" }}
            />
          </Grid>
          <Grid item xs={8} sx={matchStyle}>
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
