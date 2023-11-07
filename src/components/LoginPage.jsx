import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from "../hooks/useAuthContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const { user } = useAuthContext();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    if(user){
      window.location.replace("/");
    }
  };

  return (
    <Box sx={{ width: "100%", paddingTop: "80px", textAlign: "center" }}>
      <form action="" onSubmit={handleLogin}>
        <Stack spacing={2}>
          <Item
            sx={{
              borderRadius: "6px",
              background: " #058C42 ",
              border: "2px dashed #0D2818",
              paddingBottom: "15px",
              paddingTop: "15px",
            }}
          >
            <label htmlFor="" style={{ color: "white" }}>
              Email:
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </Item>
          <Item
            sx={{
              borderRadius: "6px",
              background: " #058C42 ",
              border: "2px dashed #0D2818",
              paddingBottom: "15px",
              paddingTop: "15px",
            }}
          >
            {" "}
            <label htmlFor="" style={{ color: "white" }}>
              Password:{" "}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </Item>
        </Stack>
        <button disabled={isLoading}>Login</button>
        {error && <div>{error}</div>}
      </form>
    </Box>
  );
}

export default LoginPage;
