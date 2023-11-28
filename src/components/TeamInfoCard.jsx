import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useContext } from "react";
import { Context } from "./App";

export default function TeamInfoCard({ club }) {
  const { user } = useAuthContext();
  const { setYourClubsList, yourClubsList } = useContext(Context);

  const handleAddClubOnYourFavouriteList = async () => {
    const team_badge = club.team_badge;
    const team_name = club.team_name;
    const team_key = club.team_key;
    setYourClubsList([...yourClubsList, { team_badge, team_key, team_name }]);
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}clubList`, {
      method: "POST",
      body: JSON.stringify({ team_badge, team_name, team_key }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await res.json();
  };
  return (
    <Card sx={{ maxWidth: "100%", backgroundColor: "#058C42" }}>
      <CardMedia
        sx={{
          width: "100px",
          height: 100,
          marginLeft: 2,
          marginTop: 2,
        }}
        image={club.team_badge}
        title={club.team_name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{ color: "white" }}
        >
          {club.team_name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "white" }}
        >
          Founded in {club.team_founded} team is located in{" "}
          {club.venue.venue_city}, {club.team_country} on{" "}
          {club.venue.venue_address}. Plays its matches at{" "}
          {club.venue.venue_name} with a capacity of {club.venue.venue_capacity}{" "}
          seats.
        </Typography>
      </CardContent>
      <CardActions>
        {user ? (
          !yourClubsList.map((c) => c.team_key).includes(club.team_key) ? (
            <form action="">
              {" "}
              <Button
                sx={{ color: "white" }}
                size="small"
                onClick={() => handleAddClubOnYourFavouriteList()}
              >
                {`Add ${club.team_name} on your list`}
                <StarOutlineIcon />
              </Button>
            </form>
          ) : (
            <Button disabled sx={{ color: "white" }} size="small">
              {`${club.team_name} is already on your list`}
              <StarIcon />
            </Button>
          )
        ) : (
          <Link to="/login">
            <Button sx={{ color: "white", marginTop: "30px" }}>
              You must be logged in
            </Button>
          </Link>
        )}
        {}
      </CardActions>
    </Card>
  );
}
