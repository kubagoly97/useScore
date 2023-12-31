import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FootballBar from "./FootballBar";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import BasicGrid2 from "./BasicGrid2";
import { PlayerPage } from "./PlayerPage";
import Register from "./Register";
import { useAuthContext } from "../hooks/useAuthContext";
import LoginCard from "./LoginCard";
import { ContextProvider } from "../context/Context";
import { FootballFooter } from "./FootballFooter";
import Presentation from "./Presentation";

export default function App() {
  const { user } = useAuthContext();
  return (
    <ContextProvider>
      <Router>
        <FootballBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/:id" element={<BasicGrid2 />} />
          <Route path="player" element={<PlayerPage />} />
          <Route
            path="login"
            element={!user ? <LoginCard /> : <Navigate to="/" />}
          />
          <Route
            path="register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FootballFooter />
      </Router>
    </ContextProvider>
  );
}
