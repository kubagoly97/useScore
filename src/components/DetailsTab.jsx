import * as React from "react";
import { Scorers } from "./Scorers";
import useProps from "../hooks/useProps";

export function DetailsTab({ match }) {
  const { language } = useProps();
  return (
    <>
      <Scorers match={match} />
      <h4>
        {language ? "Referee:" : "Sędzia:"} {match.match_referee}{" "}
      </h4>
      <h5>{match.match_stadium}</h5>
      <h6>{match.match_status}</h6>
    </>
  );
}
