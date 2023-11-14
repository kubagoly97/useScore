import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export function RedirectButtonOnRegisterAndLoginPages({
  text = "Home Page",
  to = "/",
}) {
  return (
    <Box>
      <Link to={to}>
        <Button
          variant="outlined"
          color="success"
          sx={{
            marginTop: "20px",
            border: "1px dashed #16DB65",
          }}
        >
          {text}
        </Button>
      </Link>
    </Box>
  );
}
