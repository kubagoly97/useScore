import * as React from "react";
import useProps from "../hooks/useProps";

export function MoreInfoBeforeGameComponent({
  englishText = "More info before the game",
  polishText = "Więcej szczegółów bezpośrednio przed meczem",
}) {
  const { language } = useProps();
  const paragraphStyle = { margin: "0px", fontWeight: "100" };
  return <p style={paragraphStyle}>{language ? englishText : polishText}</p>;
}
