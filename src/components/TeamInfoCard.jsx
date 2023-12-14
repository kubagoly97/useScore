import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import useProps from "../hooks/useProps";

export default function TeamInfoCard({ club }) {
  const { user } = useAuthContext();
  const { setYourClubsList, yourClubsList, language } = useProps();

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
          sx={{ color: "white", fontWeight: "100" }}
        >
          {language
            ? `Founded in ${club.team_founded} team is located in
        ${club.venue.venue_city}, ${club.team_country} on
        ${club.venue.venue_address}. Plays its matches at
        ${club.venue.venue_name} with a capacity of ${club.venue.venue_capacity}
        seats.`
            : `Utworzony w ${club.team_founded} klub z siedzibą w
            ${club.venue.venue_city}, ${club.team_country} na 
            ${club.venue.venue_address}. Rozgrywa swoje spotkania na
            ${club.venue.venue_name} o łącznej pojemności ${club.venue.venue_capacity} krzeseł.`}
        </Typography>
      </CardContent>
      <CardActions>
        {user ? (
          !yourClubsList.map((c) => c.team_key).includes(club.team_key) ? (
            <form action="">
              {" "}
              <Button
                sx={{ color: "white", fontWeight: "100" }}
                size="small"
                onClick={() => handleAddClubOnYourFavouriteList()}
              >
                {language
                  ? `Add ${club.team_name} on your list`
                  : `Dodaj ${club.team_name} na swoją listę`}
              </Button>
            </form>
          ) : (
            <Button
              disabled
              sx={{ color: "white", fontWeight: "100" }}
              size="small"
            >
              {language
                ? `${club.team_name} is already on your list`
                : `${club.team_name} jest na twojej liście`}
            </Button>
          )
        ) : (
          <Link to="/login">
            <Button
              sx={{ color: "white", marginTop: "30px", fontWeight: "100" }}
            >
              {language ? "You must be logged in" : "Musisz byc zalogowany"}
            </Button>
          </Link>
        )}
      </CardActions>
    </Card>
  );
}
