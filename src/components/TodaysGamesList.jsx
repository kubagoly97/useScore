import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { FixedSizeList } from "react-window";
import useProps from "../hooks/useProps";
import Grid from "@mui/material/Grid";

function renderRow(props) {
  const { index, style, data } = props;
  const matchStyle = { textAlign: "center", color: "white", fontWeight: "100" };
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        {console.log("itemData: ", data)}
        <Grid container spacing={2}>
          <Grid item xs={2} sx={matchStyle}>
            {data[index].match_time}
          </Grid>
          <Grid item xs={1}>
            <img
              src={data[index].team_home_badge}
              alt=""
              style={{ width: "25px" }}
            />
          </Grid>
          <Grid item xs={8} sx={matchStyle}>
            {data[index].match_hometeam_name} {data[index].match_hometeam_score}
            -{data[index].match_awayteam_score}{" "}
            {data[index].match_awayteam_name}
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
  const { language, todaysGames } = useProps();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 100,
          maxWidth: 360,
          bgcolor: "none",
        }}
      >
        <FixedSizeList
          height={100}
          width={390}
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
