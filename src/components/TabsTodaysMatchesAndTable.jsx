import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TodaysGamesList from "./TodaysGamesList";
import useProps from "../hooks/useProps";
import { getTableBodyUtilityClass } from "@mui/material";
import StandingsOnTodaysGames from "./StandingsOnTodaysGames";

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

export default function TabsTodaysMatchesAndTable() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {
    todaysDate,
    dayOfTheWeek,
    polishDayOfTheWeek,
    dateStyle,
    language,
    todaysGamesTable,
  } = useProps();

  return (
    <Box sx={{ width: "100%", "& .css-19kzrtu": { padding: "0px" } }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          sx={{ color: "white" }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
          indicatorColor="inherit"
        >
          <Tab
            sx={{
              padding: "5px",
              color: "white",
              border: value === 0 ? "0.5px solid rgb(54, 54, 54)" : "none",
              borderRadius: "20px",
            }}
            label={language ? "Todays games" : "Dzisiaj grają"}
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              padding: "5px",
              border: value === 1 ? "0.5px solid rgb(54, 54, 54)" : "none",
              borderRadius: "20px",
              transition: "1s",
            }}
            label={todaysGamesTable[0].league_name}
            {...a11yProps(1)}
            disabled={todaysGamesTable[0].country_name == "eurocups"}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <span style={dateStyle}>
          {todaysDate.$D}.{todaysDate.$M < 9 ? 0 : ""}
          {todaysDate.$M + 1}.{todaysDate.$y} |{" "}
          {language ? dayOfTheWeek : polishDayOfTheWeek}
        </span>
        <TodaysGamesList />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <StandingsOnTodaysGames table={todaysGamesTable} />
      </CustomTabPanel>
    </Box>
  );
}
