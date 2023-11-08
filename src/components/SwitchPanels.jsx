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

export default function SwitchPanels({
  yourClubsList,
  setYourClubsList,
  clubs,
  setIsOnList,
  isOnList,
  yourFollowingMatches,
  setYourFollowingMatches,
}) {
  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setIsLoading(true);
    setValue(newValue);
    setIsLoading(false);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Teams"
            {...a11yProps(0)}
            sx={{
              color: "white",
            }}
          />
          <Tab label="Matches" {...a11yProps(1)} sx={{ color: "white" }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {yourClubsList.length ? (
          <>
            {isLoading && <Loading />}
            <ClubsList
              yourClubsList={yourClubsList}
              setYourClubsList={setYourClubsList}
              clubs={clubs}
              setIsOnList={setIsOnList}
              isOnList={isOnList}
            />
          </>
        ) : (
          <h2 style={{ color: "#16DB65" }}>
            You don't have any teams on your list
          </h2>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {yourFollowingMatches.length ? (
          <>
            {isLoading && <Loading />}
            <FavouriteMatchesList
              yourFollowingMatches={yourFollowingMatches}
              setYourFollowingMatches={setYourFollowingMatches}
            />
          </>
        ) : (
          <h2 style={{ color: "#16DB65" }}>
            You don't have any matches on your list
          </h2>
        )}
      </CustomTabPanel>
    </Box>
  );
}
