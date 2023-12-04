import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import useProps from "../hooks/useProps";
import { useEffect } from "react";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };

export default function LanguageSwitch() {
  const { language, setLanguage } = useProps();

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]);

  return (
    <div>
      <span>
        <img
          src="Anglia.png"
          alt=""
          style={{ width: "18px", borderRadius: "2px" }}
        />
        <Switch
          size="small"
          sx={{
            "&.MuiSwitch-root .MuiSwitch-switchBase": {
              color: "#16DB65",
            },

            "&.MuiSwitch-root .Mui-checked": {
              color: "#16DB65",
            },
          }}
          {...label}
          checked={!language}
          color="default"
          onChange={() => setLanguage(!language)}
        />
        <img
          src="Poland.png"
          alt=""
          style={{ width: "18px", borderRadius: "2px" }}
        />
      </span>
    </div>
  );
}
