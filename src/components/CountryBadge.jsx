import * as React from "react";

export function CountryBadge({ src = "Poland.png", alt = "alt" }) {
  return (
    <>
      <img src={src} alt={alt} style={{ width: "22px", paddingRight: "5px" }} />
    </>
  );
}
