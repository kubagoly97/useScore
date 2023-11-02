import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    const user = { username, email, password };
    const res = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const json = await res.json();
    if (!res.ok) {
      setError(json.error);
      console.log(error.error);
    }
    if (res.ok) {
      setError(null);
      console.log("added new user", json.status);
      window.location.href = "/login";
    }
  };

  return (
    <Box sx={{ width: "100%", paddingTop: "80px", textAlign: "center" }}>
      <form action="" onSubmit={handleRegister}>
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
              Username:{" "}
              <input
                value={username}
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                required
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
              Email:{" "}
              <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
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
                required
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </Item>
        </Stack>
        <button>submit</button>
      </form>
    </Box>
  );
}
