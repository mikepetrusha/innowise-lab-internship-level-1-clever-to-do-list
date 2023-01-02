import { Route, Routes } from "react-router-dom";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Todo from "../pages/Todo/Todo";
import { useAuth } from "../contexts/AuthContext";

export default function AppRoute() {
  const { currentUser } = useAuth();
  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage />} />
      {currentUser && <Route path="/todo" element={<Todo />} />}
      {currentUser && <Route path="/" element={<Dashboard />} />}
      <Route path="*" element={<SigninPage />} />
    </Routes>
  );
}
