import useProps from "../hooks/useProps";
import { useEffect } from "react";

function NotFound() {
  const { language, setHomePageFootballBar } = useProps();

  useEffect(() => {
    setHomePageFootballBar(false);
  }, []);

  return (
    <div>
      <h2
        style={{ textAlign: "center", paddingTop: "20px", fontWeight: "100" }}
      >
        {language ? "404 Page not found" : "404 Strona nie odnaleziona"}
      </h2>
      <h3
        style={{
          textAlign: "center",
          fontWeight: "400",
          paddingBottom: "400px",
        }}
      >
        {language ? " Go back on the" : "Powrót na "}{" "}
        <a href="/" style={{ color: "white" }}>
          {language ? "Home Page! " : "stronę główną! "}
        </a>
        🏠
      </h3>
    </div>
  );
}

export default NotFound;
