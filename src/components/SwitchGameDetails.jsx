import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Scorers } from "./Scorers";
import { Grid } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SwitchGameDetails({ club, match }) {
  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setIsLoading(true);
    setValue(newValue);
    setIsLoading(false);
  };

  const tabsContent = [
    { playersType: "Details" },
    { playersType: "Squads" },
    { playersType: "Midfielders" },
    { playersType: "Forwards" },
  ];

  return (
    <>
      {console.log(match)}
      <Box
        sx={{
          width: 1,
          "& .MuiBox-root.css-19kzrtu": { padding: "20px 0px 20px 0px" },
        }}
      >
        <Box
          sx={{
            borderBottom: 0.5,
            borderColor: "divider",
          }}
        >
          <Tabs
            variant="scrollable"
            textColor="inherit"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#16DB65",
              },
            }}
          >
            {tabsContent.map((tab, i) => (
              <Tab
                key={i}
                label={tab.playersType}
                {...a11yProps(1)}
                sx={{ color: "white" }}
              />
            ))}
          </Tabs>
        </Box>

        <CustomTabPanel component={"div"} value={value} index={0}>
          {match.match_referee && (
            <>
              <Scorers match={match} />
              <h4>Referee: {match.match_referee} </h4>
              <h5>{match.match_stadium}</h5>
              <h6>{match.match_status}</h6>
            </>
          )}
        </CustomTabPanel>
        <CustomTabPanel component={"div"} value={value} index={1}>
          <Grid container spacing={0.1}>
            <Grid item xs={6} sx={{ textAlign: "left" }}>
              {match.match_hometeam_name}
              {match.lineup.home.starting_lineups.map((player, i) => (
                <li key={i} style={{ listStyleType: "none", fontSize: "13px" }}>
                  {player.lineup_player}
                </li>
              ))}
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              {match.match_awayteam_name}
              {match.lineup.away.starting_lineups.map((player, i) => (
                <li key={i} style={{ listStyleType: "none", fontSize: "13px" }}>
                  {player.lineup_player}
                </li>
              ))}
            </Grid>
          </Grid>
        </CustomTabPanel>
      </Box>
    </>
  );
}
