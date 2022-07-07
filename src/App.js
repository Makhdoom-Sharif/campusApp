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
import CompanyProfilePage from "./pages/CompanyProfilePage";
import StudentProfilePage from "./pages/StudentProfilePage";
import ForgotPassword from "./pages/ForgotPassword";
import PostNewJobPage from "./pages/PostNewJobPage";
import PostedJobPage from "./pages/PostedJobPage";

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
        <Route path="/companyprofile" element={<CompanyProfilePage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/postnewjobs" element={<PostNewJobPage />}></Route>
        <Route path="/postedjobs" element={<PostedJobPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
