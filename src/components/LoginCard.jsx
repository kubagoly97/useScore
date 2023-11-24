import * as React from "react";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState, useEffect } from "react";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from "../hooks/useAuthContext";
import { Stack } from "@mui/material";
import Alert from "@mui/material/Alert";
import { RedirectButtonOnRegisterAndLoginPages } from "./RedirectButtonOnRegisterAndLoginPages";
import CircularProgress from "@mui/material/CircularProgress";

export default function LoginCard({ setHomePageFootballBar }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const { user } = useAuthContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    if (user) {
      window.location.replace("/");
    }
  };
  useEffect(() => {
    setHomePageFootballBar(false);
  }, []);
  return (
    <Box style={{ textAlign: "center", width: "100%" }}>
      {error && (
        <Alert sx={{ marginTop: "20px" }} severity="error" variant="outlined">
          {error}
        </Alert>
      )}
      <Box sx={{ marginTop: "15px" }}>
        {isLoading && <CircularProgress color="success" />}
      </Box>
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
          image="LoginIMG.png"
          title="Login Cover"
        />
        <form onSubmit={handleLogin}>
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
                console.log(error && error);
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
              LOGIN
            </button>
          </CardActions>
        </form>
      </Card>
      <RedirectButtonOnRegisterAndLoginPages
        text="or register"
        to="/register"
      />
    </Box>
  );
}
