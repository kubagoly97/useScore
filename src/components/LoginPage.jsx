import LoginCard from "./LoginCard";
import { Box } from "@mui/system";
function LoginPage() {
  return (
    <Box>
      <LoginCard />
    </Box>
  );
}

export default LoginPage;

// <Box sx={{ width: "100%", paddingTop: "80px", textAlign: "center" }}>
//   <form action="" onSubmit={handleLogin}>
//     <Stack spacing={2}>
//       <Item
//         sx={{
//           borderRadius: "6px",
//           background: " #058C42 ",
//           border: "2px dashed #0D2818",
//           paddingBottom: "15px",
//           paddingTop: "15px",
//         }}
//       >
//         <label htmlFor="" style={{ color: "white" }}>
//           Email:
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//       </Item>
//       <Item
//         sx={{
//           borderRadius: "6px",
//           background: " #058C42 ",
//           border: "2px dashed #0D2818",
//           paddingBottom: "15px",
//           paddingTop: "15px",
//         }}
//       >
//         {" "}
//         <label htmlFor="" style={{ color: "white" }}>
//           Password:{" "}
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//       </Item>
//     </Stack>
//     <button disabled={isLoading}>Login</button>
//     {error && <div>{error}</div>}
//   </form>
// </Box>
