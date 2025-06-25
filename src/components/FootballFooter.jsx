import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function FootballFooter() {
  const iconStyle = {
    textDecoration: "none",
    color: "#16DB65",
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        fontWeight: "100",
        "& svg": {
          m: 1,
        },
      }}
    >
      <span style={{ paddingRight: "3px" }}> &copy; useScore</span>
      <Divider orientation="vertical" variant="middle" flexItem />
      <span>2024</span>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Tooltip title="Github" placement="bottom-end">
        <a style={iconStyle} href="https://github.com/kubagoly97">
          <GitHubIcon />
        </a>
      </Tooltip>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Tooltip title="Video portfolio" placement="bottom-end">
        <a
          href="https://www.youtube.com/channel/UCTcwSR9OGMyPqFusiPxeRVQ"
          style={iconStyle}
        >
          <YouTubeIcon />
        </a>
      </Tooltip>
      <Tooltip title="My LinkedIn" placement="bottom-end">
        <a
          href="https://www.linkedin.com/in/jakub-goly-8393a1370/?locale=pl_PL"
          style={iconStyle}
        >
          <LinkedInIcon />
        </a>
      </Tooltip>
    </Box>
  );
}
