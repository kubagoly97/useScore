import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid({ clubs }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {clubs.map((club, i) => (
          <Club club={club} i={i} key={i} />
        ))}
      </Grid>
    </Box>
  );
}

function Club({ club }) {
  return (
    <Grid xs={3}>
      <Link to={`/${club.team_name}`}>
        <Item
          sx={{
            bgcolor: "#16DB65",
            border: "2px dashed #0D2818",
            "&:hover": {
              backgroundColor: "#04471C",
              opacity: [0.8, 0.8, 0.8],
            },
          }}
          onClick={() => console.log(club)}
        >
          <img
            className="ClubImageOnList"
            src={club.team_badge}
            alt={club.team_name}
          />
        </Item>
      </Link>
    </Grid>
  );
}
