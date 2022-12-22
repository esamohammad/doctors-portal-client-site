
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
import MyAppointment from './Pages/Dashbord.js/MyAppointment';
import MyReview from './Pages/Dashbord.js/MyReview';
import MyHistory from './Pages/Dashbord.js/MyHistory';

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

        } >

          <Route index element={<MyAppointment></MyAppointment>} />
          <Route path="review" element={<MyReview></MyReview>} />
          <Route path="history" element={<MyHistory></MyHistory>} />
          {/* ***index routing */}
        </Route>

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


// {/* ***index routing */}
// index
/*
Determines if the route is an index route. Index routes render into their parent's Outlet at their parent's URL (like a default child route).


<Route path="/teams" element={<Teams />}>
  <Route index element={<TeamsIndex />} />
  <Route path=":teamId" element={<Team />} />
</Route>

These special routes can be confusing to understand at first, so we have a guide dedicated to them here: Index Route.



https://reactrouter.com/en/main/route/route#index
*/