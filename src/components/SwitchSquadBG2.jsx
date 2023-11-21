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
import TeamSquadOnBasicGrid2 from "./TeamSquadOnBasicGrid2";

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

export default function SwitchSquadBG2({ club }) {
  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setIsLoading(true);
    setValue(newValue);
    setIsLoading(false);
  };

  const tabsContent = [
    { playersType: "Goalkeepers" },
    { playersType: "Defenders" },
    { playersType: "Midfielders" },
    { playersType: "Forwards" },
  ];

  return (
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
      {tabsContent.map((tab, i) => (
        <CustomTabPanel component={"div"} value={value} index={i} key={i}>
          <TeamSquadOnBasicGrid2 club={club} playersType={tab.playersType} />
        </CustomTabPanel>
      ))}
    </Box>
  );
}
