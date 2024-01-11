import { Box } from "@mui/system";
import { useSignup } from "../hooks/useSignup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState, useEffect, useContext } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Stack } from "@mui/material";
import Alert from "@mui/material/Alert";
import { RedirectButtonOnRegisterAndLoginPages } from "./RedirectButtonOnRegisterAndLoginPages";
import CircularProgress from "@mui/material/CircularProgress";
import useProps from "../hooks/useProps";
import Fade from "@mui/material/Fade";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const { user } = useAuthContext();
  const { setHomePageFootballBar, homePageFootballBar, language } = useProps();

  const handleRegister = async (e) => {
    e.preventDefault();
    await signup(email, password);
    if (user) {
      window.location.replace("/");
    }
  };
  useEffect(() => {
    setHomePageFootballBar(false);
  }, []);

  const labelStyle = {
    fontFamily: "roboto",
    color: "white",
    fontSize: "14px",
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
        <Box sx={{ marginTop: "15px" }}>
          {isLoading && <CircularProgress color="success" />}
        </Box>
        <Fade in={!homePageFootballBar}>
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
                  <label htmlFor="email" style={labelStyle}>
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
                  <label htmlFor="password" style={labelStyle}>
                    {language ? "PASSWORD " : "HASŁO "}
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
                  class="btnLoginAndRegister"
                  disabled={isLoading}
                  onClick={(e) => {
                    e.target.style.color = "white";
                  }}
                  size="small"
                  style={{
                    fontWeight: "450",
                    fontSize: "14px",
                    fontFamily: "roboto",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    border: "none",
                    padding: "8px",
                  }}
                >
                  {language ? "REGISTER" : "ZAREJESTRUJ SIĘ"}
                </button>
              </CardActions>
            </form>
          </Card>
        </Fade>
        <RedirectButtonOnRegisterAndLoginPages
          text={language ? "OR LOGIN" : "ZALOGUJ SIĘ"}
          to="/login"
        />
      </Box>
    </>
  );
}
