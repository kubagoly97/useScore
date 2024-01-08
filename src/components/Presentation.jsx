import { Box } from "@mui/system";
import YouTubeIcon from "@mui/icons-material/YouTube";
import useProps from "../hooks/useProps";
import { useEffect } from "react";
import Fade from "@mui/material/Fade";

export default function Presentation() {
  const { language, setHomePageFootballBar, homePageFootballBar } = useProps();

  useEffect(() => {
    setHomePageFootballBar(false);
  }, []);

  return (
    <Fade in={!homePageFootballBar}>
      <Box sx={{ paddingTop: "10px" }}>
        <h1>
          <a
            style={{ textDecoration: "none", color: "#16DB65" }}
            href="https://www.youtube.com/watch?v=D8u7DHXT9Vg"
          >
            {language
              ? "useScore video presentation "
              : "useScore prezentacja video"}
            <YouTubeIcon />
          </a>
        </h1>
        <Box
          sx={{
            textAlign: "center",
            paddingBottom: "56.25%",
            position: "relative",
            height: "0",
          }}
        >
          <iframe
            style={{
              borderRadius: "10px",
              border: "1px solid #16DB65",
              left: "0",
              top: "0",
              height: "100%",
              width: "100%",
              position: "absolute",
            }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/D8u7DHXT9Vg?si=e2mzi4_xPgWsbIvV"
            title="useScore"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
      </Box>
    </Fade>
  );
}
