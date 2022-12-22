
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Appointment from './Pages/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashbord from './Pages/Dashbord.js/Dashboard';
import Dashboard from './Pages/Dashbord.js/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Appointment" element={

          <RequireAuth>
            <Appointment />
          </RequireAuth>

        } />

        <Route path="dashboard" element={

          <RequireAuth>
            <Dashboard />
          </RequireAuth>

        } />
        <Route path="Reviews" element={<Reviews />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
