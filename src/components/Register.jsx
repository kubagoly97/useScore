import { Box } from "@mui/system";
import { useSignup } from "../hooks/useSignup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Stack } from "@mui/material";
import Alert from "@mui/material/Alert";
import { RedirectButtonOnRegisterAndLoginPages } from "./RedirectButtonOnRegisterAndLoginPages";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const { user } = useAuthContext();

  const handleRegister = async (e) => {
    e.preventDefault();
    await signup(email, password);
    if (user) {
      window.location.replace("/");
    }
  };

  return (
    <>
      <Box style={{ textAlign: "center", width: "100%" }}>
        {error && (
          <Alert
            sx={{ marginTop: "20px" }}
            severity="error"
            variant="outlined"
            onClose={() => {}}
          >
            {error}
          </Alert>
        )}
        <Card
          sx={{
            display: "inline-block",
            maxWidth: 345,
            minWidth: 300,
            backgroundColor: "#0D2818",
            border: "1px dashed #16DB65",
            marginTop: "40px",
          }}
        >
          <CardMedia
            sx={{
              height: 230,
              width: 400,
              borderBottom: "1px dashed #16DB65",
            }}
            image="RegisterIMG.avif"
            title="Login Cover"
          />
          <form onSubmit={handleRegister}>
            <CardContent>
              <Stack spacing={3}>
                <label
                  htmlFor="email"
                  style={{
                    fontFamily: "roboto",
                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  EMAIL{" "}
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    style={{
                      all: "unset",
                      height: "25px",
                      backgroundColor: "white",
                      borderBottom: "1px solid #16DB65",
                      marginTop: "15px",
                      borderRadius: "3px",
                      color: "black",
                    }}
                  />
                </label>
                <label
                  htmlFor="password"
                  style={{
                    fontFamily: "roboto",
                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  PASSWORD{" "}
                  <input
                    autoComplete="on"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    style={{
                      all: "unset",
                      height: "25px",
                      borderBottom: "1px solid #16DB65",
                      color: "black",
                      backgroundColor: "white",
                      marginTop: "10px",
                      borderRadius: "3px",
                    }}
                  />
                </label>
              </Stack>
            </CardContent>
            <CardActions>
              <button
                disabled={isLoading}
                onClick={(e) => {
                  console.log("Clicked");
                  e.target.style.color = "white";
                }}
                size="small"
                style={{
                  fontWeight: "450",
                  fontSize: "14px",
                  fontFamily: "roboto",
                  color: "#16DB65",
                  backgroundColor: "rgba(255, 255, 255, 0)",
                  border: "none",
                  padding: "8px",
                }}
              >
                REGISTER
              </button>
            </CardActions>
          </form>
        </Card>
        <RedirectButtonOnRegisterAndLoginPages text="or login" to="/login" />
      </Box>
    </>
  );
}
