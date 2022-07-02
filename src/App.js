import logo from './logo.svg';
import './App.css';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminPage from './pages/AdminPage';
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import StudentHomePage from './pages/StudentHomePage';
import CompanyHomePage from './pages/CompanyHomePage';
import CompanyProfile from './pages/CompanyProfile';
import StudentProfilePage from './pages/StudentProfilePage';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path="/" element={<LoginPage/>} />
    </Routes>
      <Routes>
        <Route path='/signup' element={<SignUpPage/>}/>
      </Routes>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      <Routes>
        <Route path='/homepage' element={<StudentHomePage/>}/>
      </Routes>
      <Routes>
        <Route path='/company' element={<CompanyHomePage/>}/>
      </Routes>
      <Routes>
        <Route path='/studentprofile' element={<StudentProfilePage/>}/>
      </Routes>
      <Routes>
        <Route path='/companyprofile' element={<CompanyProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
