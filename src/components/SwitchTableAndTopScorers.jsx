import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LeagueTable from "./LeagueTable";
import TopScorersTable from "./TopScorersTable";
import useProps from "../hooks/useProps";
import Fade from "@mui/material/Fade";

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

export default function SwitchTableAndTopScorers({ table, club, topScorers }) {
  const [value, setValue] = React.useState(0);
  const { language } = useProps();

  const tabs = [{ tabName: "TABLE" }, { tabName: "TOP SCORERS" }];
  const tabsPl = [{ tabName: "TABELA" }, { tabName: "STRZELCY" }];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: 1,
        "& .MuiBox-root.css-19kzrtu": { padding: "0px" },
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
          {language
            ? tabs.map((tab, i) => (
                <Tab
                  key={i}
                  sx={{ color: "white" }}
                  label={tab.tabName}
                  {...a11yProps(0)}
                />
              ))
            : tabsPl.map((tab, i) => (
                <Tab
                  key={i}
                  sx={{ color: "white" }}
                  label={tab.tabName}
                  {...a11yProps(0)}
                />
              ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <LeagueTable table={table} club={club} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TopScorersTable topScorers={topScorers} />
      </CustomTabPanel>
    </Box>
  );
}
