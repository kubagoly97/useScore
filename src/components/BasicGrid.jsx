import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import useProps from "../hooks/useProps";
import Tooltip from "@mui/material/Tooltip";
import NoPicture from "/NoPicture.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));

export default function BasicGrid() {
  const { clubs } = useProps();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {clubs.map((club, i) => (
          <ClubCard club={club} i={i} key={i} />
        ))}
      </Grid>
    </Box>
  );
}

function ClubCard({ club }) {
  const replaceImage = (e) => {
    e.target.src = NoPicture;
  };
  return (
    <Tooltip placement="top-start" title={`${club.team_name}`}>
      <Grid xs={12} sm={4} md={3}>
        <Link to={`/${club.team_key}`}>
          <Item
            sx={{
              bgcolor: "#16DB65",
              border: "1px dashed #0D2818",
              "&:hover": {
                backgroundColor: "#04471C",
                opacity: [0.8, 0.8, 0.8],
              },
            }}
          >
            <img
              onError={replaceImage}
              className="ClubImageOnList"
              src={club.team_badge}
              alt={club.team_name}
            />
          </Item>
        </Link>
      </Grid>
    </Tooltip>
  );
}
