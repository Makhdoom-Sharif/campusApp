import logo from "./logo.svg";
import "./App.css";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPage from "./pages/AdminPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import StudentHomePage from "./pages/StudentHomePage";
import CompanyHomePage from "./pages/CompanyHomePage";
import CompanyProfile from "./pages/CompanyProfile";
import StudentProfilePage from "./pages/StudentProfilePage";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<StudentHomePage />} />
        <Route path="/company" element={<CompanyHomePage />} />
        <Route path="/studentprofile" element={<StudentProfilePage />} />
        <Route path="/companyprofile" element={<CompanyProfile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
