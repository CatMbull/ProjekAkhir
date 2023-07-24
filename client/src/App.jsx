import { Routes, Route } from "react-router-dom";
import RegisterPage from "./components/Pages/RegisterPage";
import LoginPage from "./components/Pages/LoginPage";
import ErrorPage from "./components/Pages/ErrorPage";
import HomePage from "./components/Pages/HomePage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="/Register" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
