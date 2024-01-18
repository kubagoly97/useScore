import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Item } from "./MatchDetailsOnHomePage";
import { StartingAwaySquad } from "./StartingAwaySquad";
import { StartingHomeSquad } from "./StartingHomeSquad";
import useProps from "../hooks/useProps";
import { HeadToHead } from "./HeadToHead";
import { MoreInfoBeforeGameComponent } from "./MoreInfoBeforeGameComponent";
import { DetailsTab } from "./DetailsTab";

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

export default function SwitchGameDetails({
  club,
  match,
  headToHead,
  isHLoading,
}) {
  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { language } = useProps();
  const handleChange = (event, newValue) => {
    setIsLoading(true);
    setValue(newValue);
    setIsLoading(false);
  };

  const tabsEngContent = [
    { playersType: "Details" },
    { playersType: "Squads" },
    { playersType: "Stats" },
  ];
  const tabsPLContent = [
    { playersType: "Szczegóły" },
    { playersType: "Skład" },
    { playersType: "Statystyki" },
  ];

  return (
    <>
      <Box
        component={"div"}
        sx={{
          width: 1,
          "& .MuiBox-root.css-19kzrtu": { padding: "20px 0px 20px 0px" },
        }}
      >
        <button onClick={() => console.log(match)}>check</button>
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
            {language
              ? tabsEngContent.map((tab, i) => (
                  <Tab
                    key={i}
                    label={tab.playersType}
                    {...a11yProps(1)}
                    sx={{ color: "white" }}
                  />
                ))
              : tabsPLContent.map((tab, i) => (
                  <Tab
                    key={i}
                    label={tab.playersType}
                    {...a11yProps(1)}
                    sx={{ color: "white" }}
                  />
                ))}
            <Tab
              label="H2H"
              {...a11yProps(1)}
              sx={{ color: "white" }}
              disabled={isHLoading}
            />
          </Tabs>
        </Box>
        <CustomTabPanel component={"div"} value={value} index={0}>
          {match.lineup.home.starting_lineups.length ? (
            <DetailsTab match={match} />
          ) : (
            <MoreInfoBeforeGameComponent />
          )}
        </CustomTabPanel>
        <CustomTabPanel component={"div"} value={value} index={1}>
          {match.lineup.home.starting_lineups.length ? (
            <Grid container spacing={0.1}>
              <StartingHomeSquad match={match} />
              <StartingAwaySquad match={match} />
            </Grid>
          ) : (
            <MoreInfoBeforeGameComponent />
          )}
        </CustomTabPanel>
        <CustomTabPanel component={"div"} value={value} index={2}>
          {match.statistics.length ? (
            <Box sx={{ width: "100%" }}>
              <Stack spacing={0}>
                {match.statistics.map((stat, i) => (
                  <Item
                    sx={{
                      bgcolor: "#0D2818",
                      color: "white",
                      borderRadius: "0px",
                      boxShadow: "none",
                    }}
                  >
                    <Grid container>
                      <Grid xs={1} sx={{ borderRight: "1px solid white" }}>
                        {stat.home}
                      </Grid>
                      <Grid xs={10} sx={{ fontWeight: "800" }}>
                        {stat.type}
                      </Grid>
                      <Grid xs={1} sx={{ borderLeft: "1px solid white" }}>
                        {stat.away}
                      </Grid>
                    </Grid>
                  </Item>
                ))}
              </Stack>
            </Box>
          ) : (
            <MoreInfoBeforeGameComponent />
          )}
        </CustomTabPanel>
        <CustomTabPanel component={"div"} value={value} index={3}>
          <HeadToHead headToHead={headToHead} club={club} />
        </CustomTabPanel>
      </Box>
    </>
  );
}
