import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import { CountryBadge } from "./CountryBadge";

export function CoutryOnHomePageList({ src, text = "Country" }) {
  const subheaderStyle = {
    bgcolor: "#0D2617",
    color: "white",
    fontWeight: "900",
    height: "30px",
    paddingBottom: "40px",
    borderBottom: "0.5px solid grey",
  };

  return (
    <ListSubheader sx={subheaderStyle}>
      <CountryBadge src={src} /> {text}
    </ListSubheader>
  );
}
