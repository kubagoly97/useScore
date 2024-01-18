import * as React from "react";
import { Scorers } from "./Scorers";
import useProps from "../hooks/useProps";

export function DetailsTab({ match }) {
  const { language } = useProps();
  return (
    <>
      <Scorers match={match} />
      <h4>
        {language
          ? match.match_referee.length > 0 && `Referee:`
          : match.match_referee.length > 0 && `Sędzia:`}{" "}
        {match.match_referee.length > 0 && match.match_referee}{" "}
      </h4>
      <h5>{match.match_stadium}</h5>
      <h6>{match.match_status}</h6>
    </>
  );
}
