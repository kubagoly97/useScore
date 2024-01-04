import * as React from "react";
import useProps from "../hooks/useProps";

export function MoreInfoBeforeGameComponent() {
  const { language } = useProps();
  const paragraphStyle = { margin: "0px", fontWeight: "100" };
  return (
    <p style={paragraphStyle}>
      {language
        ? "More info before the game"
        : "Więcej szczegółów bezpośrednio przed meczem"}
    </p>
  );
}
