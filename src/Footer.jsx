import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {"Jakub Goły, "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bottom: 0,
        minHeight: "40vh",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          borderRadius: "3px",
          mt: "auto",
          backgroundColor: "rgba(0,0,0,0.3)",
          marginBottom: "2.5px",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">useScore &#169;</Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
