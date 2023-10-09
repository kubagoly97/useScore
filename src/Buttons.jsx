import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { OneButton } from "./OneButton";
export default function Buttons({
  fetchSpainData,
  fetchSpain2Data,
  fetchEnglishData,
  fetchGermanyData,
  fetchEkstraklasaData,
}) {
  return (
    <div style={{ marginTop: "30px" }}>
      <ButtonGroup
        variant="contained"
        aria-label="outlined success button group"
        sx={{ border: "1px solid white" }}
      >
        <OneButton
          style={{ bgcolor: "#058C42" }}
          buttonText="La Liga"
          func={fetchSpainData}
        />
        <OneButton
          style={{ bgcolor: "#058C42" }}
          buttonText="Premier League"
          func={fetchEnglishData}
        />
        <OneButton
          style={{ bgcolor: "#058C42" }}
          buttonText="Bundesliga"
          func={fetchGermanyData}
        />
        <OneButton
          style={{ bgcolor: "#058C42" }}
          buttonText="Ekstraklasa"
          func={fetchEkstraklasaData}
        />
        <OneButton
          style={{ bgcolor: "#058C42" }}
          buttonText="Segunda Division"
          func={fetchSpain2Data}
        />
      </ButtonGroup>
    </div>
  );
}
