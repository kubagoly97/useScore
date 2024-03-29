import * as React from "react";
import CircleIcon from "@mui/icons-material/Circle";

export function MatchStatus({
  match,
  postponed = "Post.",
  finished = "Finish.",
  halfTime = "Half Time",
  favourites = true,
}) {
  return (
    <span>
      {favourites
        ? (!match.match_status.length && `${match.match_time}`) ||
          (match.match_status == "Finished" && finished) ||
          (match.match_status == "After ET" && finished) ||
          (match.match_status == "Aban." && postponed) ||
          (match.match_status == "Postponed" && postponed) ||
          (match.match_status == "Half Time" && halfTime) ||
          (match.match_status.length && (
            <span
              style={{
                fontSize: favourites ? "18px" : "22px",
                color: "white",
                paddingLeft: favourites ? "18px" : "none",
              }}
            >
              <CircleIcon fontSize="small" sx={{ color: "red" }} />{" "}
              {match.match_status}'
            </span>
          ))
        : (!match.match_status.length && match.match_time) ||
          (match.match_status == "Finished" && finished) ||
          (match.match_status == "After ET" && finished) ||
          (match.match_status == "Aban." && postponed) ||
          (match.match_status == "Postponed" && postponed) ||
          (match.match_status == "Half Time" && halfTime) ||
          (match.match_status.length && (
            <span style={{ color: "white" }}>
              <CircleIcon fontSize="small" sx={{ color: "red" }} />{" "}
              {match.match_status}'
            </span>
          ))}
    </span>
  );
}
