import React, { use } from "react";
import { Link, NavLink } from "react-router";
import AppStoreLogo from "../../../assets/Logo.png";
import { AuthContext } from "../../../Context/AuthContext";
import userIcon from '../../../assets/userIcon.png'

const Navbar = () => {
    const {user, handleSingOut} = use(AuthContext)
    const menuLinks = <>
            <li>
              <NavLink to="" className={
                ({isActive}) => 
                    isActive? "border-b-2 border-primary rounded-none text-primary" : ""
                }>Apps</NavLink>
            </li>
            <li>
              <NavLink to="/my-profile" className={
                ({isActive}) => 
                    isActive? "border-b-2 border-primary rounded-none text-primary" : ""
                }>My Profile</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className={
                ({isActive}) => 
                    isActive? "border-b-2 border-primary rounded-none text-primary" : ""
                }>Contact Us</NavLink>
            </li>
    </>
  return (
    <div className="navbar py-5 lg:px-0 px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu space-y-4 text-lg font-bold menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {
                menuLinks
            }
          </ul>
        </div>
        <Link to=''>
            <img className="w-40" src={AppStoreLogo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-6 text-lg font-bold menu-horizontal px-1">
            {
                menuLinks 
            }
        </ul>
      </div>
      <div className="navbar-end gap-5 items-center">
            <p className="hidden md:block">{user && user.email}</p>
            <div className="tooltip tooltip-left" data-tip ={`${user ? user.displayName : '' }`}>
              {
                user && 
                  <Link to="/my-profile">    
                  <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                      <img src={`${user ? user.photoURL || userIcon : userIcon }`} />
                    </div>
                  </div>
                </Link>
              }


            </div>
        <div>

          {
            user? 
            <button onClick={()=> handleSingOut()} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-sm text-sm px-6 py-2.5 text-center me-2 mb-2 ">Logout</button>
            :
            <Link to="login">
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-sm text-sm px-6 py-2.5 text-center me-2 mb-2 ">Login</button>
          </Link>
          }
        </div>

      </div>
    </div>
  );
};

export default Navbar;
