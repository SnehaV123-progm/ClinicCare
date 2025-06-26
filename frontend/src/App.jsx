import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Patient_webpage from './pages/Patient_webpage';
import Navbar from './components/Navbar';
import Doctor from './pages/Doctor';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Appointment_history from './pages/Appointment_history';
import Appointment_booking from './pages/Appointment_booking';
import Feedback from './pages/Feedback';
import SpecialityMenu from './components/SpecialityMenu';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Patient_webpage />} />
        <Route path="/appointment-booking" element={<Appointment_booking />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctors/:speciality" element={<Doctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/appointment-history" element={<Appointment_history />} />
        <Route path="/appointment-booking/:doctorId" element={<Appointment_booking />} /> 
        <Route path="/speciality-menu" element={<SpecialityMenu />} />
      </Routes>
    </div>
  );
};

export default App;
