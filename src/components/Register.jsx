import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import { dividerClasses } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleRegister = async (e) => {
    e.preventDefault();
    await signup(email, password);
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
        <button disabled={isLoading}>Sign Up</button>
        {error && <div>{error}</div>}
      </form>
    </Box>
  );
}
