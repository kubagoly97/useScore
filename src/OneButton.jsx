import * as React from "react";
import Button from "@mui/material/Button";

export function OneButton({ style, buttonText, func }) {
  return (
    <Button sx={style} onClick={func}>
      {buttonText}
    </Button>
  );
}
