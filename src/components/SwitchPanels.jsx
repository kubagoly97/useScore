import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ClubsList from "./ClubsList";
import FavouriteMatchesList from "./FavouriteMatchesList";
import { useState } from "react";
import Loading from "./Loading";
import useProps from "../hooks/useProps";

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

export default function SwitchPanels() {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { yourClubsList, yourFollowingMatches, language } = useProps();

  const handleChange = (event, newValue) => {
    setIsLoading(true);
    setValue(newValue);
    setIsLoading(false);
  };

  return (
    <Box
      sx={{
        width: 1,
        "& .MuiBox-root.css-19kzrtu": { padding: "20px 0px 20px 0px" },
      }}
    >
      <Box sx={{ borderBottom: 0.5, borderColor: "divider" }}>
        <Tabs
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
          <Tab
            label={language ? "Teams" : "Kluby"}
            {...a11yProps(0)}
            sx={{
              color: "white",
            }}
          />
          <Tab
            label={language ? "Matches" : "Mecze"}
            {...a11yProps(1)}
            sx={{ color: "white" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel component="div" value={value} index={0}>
        {yourClubsList.length ? (
          <>
            {isLoading && <Loading />}
            <ClubsList />
          </>
        ) : (
          <span style={{ color: "#16DB65" }}>
            {language
              ? `You don't have any teams on your list`
              : "Nie masz jeszcze zespołu na liście"}
          </span>
        )}
      </CustomTabPanel>

      <CustomTabPanel component="div" value={value} index={1}>
        {yourFollowingMatches.length ? (
          <>
            {isLoading && <Loading />}
            <FavouriteMatchesList />
          </>
        ) : (
          <span style={{ color: "#16DB65" }}>
            {language
              ? `You don't have any matches on your list`
              : "Nie masz jeszcze meczu na liście"}
          </span>
        )}
      </CustomTabPanel>
    </Box>
  );
}
