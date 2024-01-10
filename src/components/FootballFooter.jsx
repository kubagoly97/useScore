import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
export function FootballFooter() {
  const iconStyle = {
    textDecoration: "none",
    color: "#16DB65",
  };

  return (
    <footer>
      <p style={{ fontWeight: "100" }}>
        &copy; useScore | 2024 |{" "}
        <a style={iconStyle} href="https://github.com/kubagoly97">
          <GitHubIcon />
        </a>{" "}
        |{" "}
        <a
          href="https://www.youtube.com/channel/UCTcwSR9OGMyPqFusiPxeRVQ"
          style={iconStyle}
        >
          <YouTubeIcon />
        </a>
      </p>
    </footer>
  );
}
