import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { Item } from "./BasicGrid2";
import { Button } from "@mui/material";
import Blank from "/Blank.jpeg";
import Stack from "@mui/material/Stack";
import useProps from "../hooks/useProps";
import Fade from "@mui/material/Fade";

export function PlayerPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const playerId = searchParams.get("play");
  const [isLoading, setIsLoading] = useState(false);

  const { playerData, setPlayerData, setHomePageFootballBar, language } =
    useProps();

  useEffect(() => {
    const fetchPlayerData = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://apiv3.apifootball.com/?action=get_players&player_id=${playerId}&APIkey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const resJSON = await res.json();
      setPlayerData(resJSON);
      setIsLoading(false);
    };

    fetchPlayerData();
  }, []);

  useEffect(() => {
    setHomePageFootballBar(false);
  }, []);

  const index = playerData.length - 1;

  const replaceImage = (e) => {
    e.target.src = Blank;
  };

  return (
    <>
      {isLoading && <Loading />}
      {playerData.length && (
        <>
          <div style={{ marginTop: "40px" }}>
            <Fade in={playerId} timeout={1000}>
              <Item
                sx={{
                  backgroundColor: " #0D2818",
                  border: "2px dashed #16DB65",
                  textAlign: "left",
                }}
              >
                <section
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontFamily: "sans-serif",
                    borderRadius: "3px",
                    backgroundColor: "#0D2818",
                  }}
                >
                  <img
                    src={playerData[index].player_image}
                    onError={replaceImage}
                    alt={playerData[index].player_name}
                    style={{
                      borderRadius: "3px",
                      width: "170px",
                      height: "auto",
                    }}
                  />
                  <div style={{ paddingLeft: "10px" }}>
                    <h1 style={{ color: "white", fontWeight: "500" }}>
                      {playerData[index].player_name}{" "}
                    </h1>
                    <h3 style={{ fontWeight: "400", color: "white" }}>
                      {" "}
                      {playerData[index].team_name},{" "}
                      {language
                        ? `${playerData[index].player_type}`
                        : (playerData[index].player_type === "Goalkeepers" &&
                            "Bramkarz") ||
                          (playerData[index].player_type === "Midfielders" &&
                            "Pomocnik") ||
                          (playerData[index].player_type === "Forwards" &&
                            "Napastnik") ||
                          (playerData[index].player_type === "Defenders" &&
                            "Obrońca")}
                    </h3>
                    <h4 style={{ fontWeight: "100", color: "white" }}>
                      {language ? "Age: " : "Wiek: "}
                      {playerData[index].player_age},{" "}
                      {playerData[index].player_birthdate}
                    </h4>
                  </div>
                </section>
              </Item>
            </Fade>
          </div>{" "}
          <Stack>
            <Link to="/">
              <Button sx={{ color: "#16DB65", marginTop: "30px" }}>
                {language ? "← Home Page" : "← Strona Główna"}
              </Button>
            </Link>
            <Link to={`/${playerData[index].team_key}`}>
              <Button sx={{ color: "#16DB65", marginTop: "5px" }}>
                {`← ${playerData[index].team_name}`}
              </Button>
            </Link>
          </Stack>
        </>
      )}
    </>
  );
}
