import * as React from "react";

export function CountryBadge({ src, alt = "alt" }) {
  return (
    <>
      <img src={src} alt={alt} style={{ width: "22px" }} />
    </>
  );
}
