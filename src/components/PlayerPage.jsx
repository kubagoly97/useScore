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

export function PlayerPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const playerId = searchParams.get("play");
  const [isLoading, setIsLoading] = useState(false);

  const { playerData, setPlayerData, setHomePageFootballBar } = useProps();

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
            <Item
              sx={{
                backgroundColor: " #04471C",
                border: "2px dashed #0D2818",
                textAlign: "left",
              }}
            >
              <section
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontFamily: "sans-serif",
                  borderRadius: "3px",
                  backgroundColor: "#058C42",
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
                  <h1 style={{ color: "white" }}>
                    {playerData[index].player_name}{" "}
                  </h1>
                  <h3>
                    {" "}
                    {playerData[index].team_name},{" "}
                    {playerData[index].player_type}
                  </h3>
                  <h4>
                    Age: {playerData[index].player_age},{" "}
                    {playerData[index].player_birthdate}
                  </h4>
                </div>
              </section>
            </Item>
          </div>{" "}
          <Stack>
            <Link to="/">
              <Button sx={{ color: "#16DB65", marginTop: "30px" }}>
                ← Home Page
              </Button>
            </Link>
            <Link to={`/${playerData[index].team_key}`}>
              <Button sx={{ color: "#16DB65", marginTop: "5px" }}>
                {`← ${playerData[index].team_name} page`}
              </Button>
            </Link>
          </Stack>
        </>
      )}
    </>
  );
}
