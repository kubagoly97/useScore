import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function TeamInfoCard({
  club,
  yourClubsList,
  setYourClubsList,
}) {
  const handleAddClubOnYourFavouriteList = async () => {
    const team_badge = club.team_badge;
    const team_name = club.team_name;
    const team_key = club.team_key;
    setYourClubsList([...yourClubsList, { team_badge, team_key, team_name }]);
    const res = await fetch("http://localhost:4000/clubList", {
      method: "POST",
      body: JSON.stringify({ team_badge, team_name, team_key }),
      headers: { "Content-Type": "application/json" },
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
        {!yourClubsList.map((c) => c.team_key).includes(club.team_key) ? (
          <form action="">
            {" "}
            <Button
              sx={{ color: "white" }}
              size="small"
              onClick={() => handleAddClubOnYourFavouriteList()}
            >{`Add ${club.team_name} on your list`}</Button>
          </form>
        ) : (
          <Button disabled sx={{ color: "white" }} size="small">
            {`${club.team_name} is already on your list`}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
