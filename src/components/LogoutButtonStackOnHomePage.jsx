import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export function LogoutButtonStackOnHomePage() {
  return (
    <Stack spacing={2} sx={{ margin: "40px", textAlign: "center" }}>
      <Link to="/login">
        <Button
          variant="outlined"
          color="success"
          sx={{
            paddingInline: "100px",
            marginTop: "20px",
            border: "1px dashed #16DB65",
            color: "white",
          }}
        >
          Login
        </Button>
      </Link>
      <Link to="/register">
        <Button
          variant="outlined"
          color="success"
          sx={{
            paddingInline: "87px",
            marginTop: "10px",
            border: "1px dashed #16DB65",
            color: "white",
          }}
        >
          Register
        </Button>
      </Link>
    </Stack>
  );
}
