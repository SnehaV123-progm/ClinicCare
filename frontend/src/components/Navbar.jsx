// components/Navbar.jsx
import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const { isLoggedIn, profilePic } = useSelector((state) => state.auth);


  return (
    <div className="flex flex-wrap items-center justify-between py-3 mb-5 border-b border-b-gray-400 gap-y-4 px-4">

      {/* Left: Logo + Title */}
      <div className="flex items-center gap-2">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
        />
        <div className="flex flex-col leading-none">
          <h1 className="text-xl md:text-2xl font-bold m-0">Medico</h1>
          <p className="text-sm md:text-base text-gray-700 -mt-1 m-0">Heal. Thrive. Live.</p>
        </div>
      </div>

      {/* Center: Nav Links */}
      <ul className="hidden md:flex gap-8 font-medium items-center">
        <NavLink to="/"><li className='py-1 text-black text-center hover:bg-blue-400 hover:text-white w-20 rounded-full'>HOME</li></NavLink>
        <NavLink to="/doctors"><li className='py-1 text-black text-center hover:bg-blue-400 hover:text-white w-40 rounded-full'>ALL DOCTORS</li></NavLink>
        <NavLink to="/about"><li className='py-1 text-black text-center hover:bg-blue-400 hover:text-white w-20 rounded-full'>ABOUT</li></NavLink>
        <NavLink to="/contact"><li className='py-1 text-black text-center hover:bg-blue-400 hover:text-white w-35 rounded-full'>CONTACT</li></NavLink>
      </ul>

      {/* Right: Account + Hamburger */}
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-11 rounded-full" src={profilePic || assets.profile_pic} alt="Profile" />
            <img className="w-4 h-4 m-2 -ml-1 mt-5 rounded-full" src={assets.dropdown_icon} alt="Dropdown" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => navigate('/profile')} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={() => navigate('/appointment-booking')} className="hover:text-black cursor-pointer">My Appointments</p>
                <p onClick={() => navigate('/appointment-history')} className="hover:text-black cursor-pointer">Appointment History</p>
                <p
                  onClick={() => {
                    dispatch(logout());
                    navigate('/');
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white text-center font-semibold w-20 py-2 rounded-full text-sm"
          >
            Register
          </button>
        )}

        {/* Hamburger Icon for Mobile */}
        <i
          className="bi bi-list text-3xl md:hidden cursor-pointer"
          onClick={() => setShowMenu(true)}
        ></i>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed inset-0 z-50 bg-white md:hidden transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between px-5 py-6 border-b">
              <h1 className="text-xl font-bold">Medico</h1>
              <p className="text-sm md:text-base text-gray-700 -mb-10 -ml-[300px]">Heal. Thrive. Live.</p>
              <i
                className="bi bi-x text-3xl cursor-pointer"
                onClick={() => setShowMenu(false)}
              ></i>
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
              <NavLink to="/"><p className="px-4 py-2 rounded inline-block">HOME</p></NavLink>
              <NavLink to="/doctors"><p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p></NavLink>
              <NavLink to="/about"><p className="px-4 py-2 rounded inline-block">ABOUT</p></NavLink>
              <NavLink to="/contact"><p className="px-4 py-2 rounded inline-block">CONTACT</p></NavLink>
            </ul>
          </div>

          {isLoggedIn && (
            <div className="flex justify-end p-5 border-t">
              <div
                className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-black"
                onClick={() => {
                  navigate('/profile');
                  setShowMenu(false);
                }}
              >
                <i className="bi bi-person-lines-fill text-2xl"></i>
                <span className="text-base font-medium">Profile</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
