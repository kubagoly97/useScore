import GitHubIcon from "@mui/icons-material/GitHub";
export function FootballFooter() {
  return (
    <footer>
      <p style={{ fontWeight: "100" }}>
        &copy; useScore, 2023,{" "}
        <a
          style={{
            textDecoration: "none",
            color: "#16DB65",
          }}
          href="https://github.com/kubagoly97"
        >
          <GitHubIcon />
        </a>
      </p>
    </footer>
  );
}
