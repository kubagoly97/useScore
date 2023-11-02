import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useState } from "react";
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

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const json = await res.json();
    if (json.user) {
      localStorage.setItem("token", json.user);
      alert("login successful");
      window.location.href = "/";
    } else {
      alert("please chech your username and password");
    }
    console.log(json);
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
              Login:{" "}
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
        <button>Login</button>
      </form>
    </Box>
  );
}

export default LoginPage;
