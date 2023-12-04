import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useProps from "../hooks/useProps";

export function LogoutButtonStackOnHomePage() {
  const { language } = useProps();

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
          {language ? "Login" : "Zaloguj się"}
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
          {language ? "Register" : "Zarejestruj się"}
        </Button>
      </Link>
    </Stack>
  );
}
