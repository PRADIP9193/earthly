import React from "react";
import navIcon from "../assets/navIcon.svg";
// import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container z-10 fixed navbar__earthly flex rounded-[1.31rem] items-center justify-between px-4 py-4 mx-auto w-9/12 h-16 bg-[#733a3a85] left-1/2 -translate-x-1/2 translate-y-4 backdrop-blur-[0.188rem] border border-solid border-[#e1e1e12e]  hover:animate-pulse shadow-custom">
      {/* logo */}
      <div className=" font-[itim] text-3xl pl-4 justify-center items-center text-gray-50 hover:text-[#285430] ">
        <a href="#Home">
          <p>earthly.ie</p>
        </a>
      </div>
      {/* links */}
      <ul className="flex list-none gap-16 font-[inter] items-center justify-center text-white text-lg pr-4 cursor-pointer ">
        <li className="hover:text-green-900">
          <a href="#Home">Home</a>
        </li>
        <li className="hover:text-green-900">
          <a href="#Shop" onClick={() => window.location.replace("/#Shop")}>
            Shop
          </a>
        </li>
        <li className="hover:text-green-900">
          <a
            href="#AboutUs"
            onClick={() => window.location.replace("/#AboutUs")}>
            About Us
          </a>
        </li>
        <li>
          <a href="#ContactUs" onClick={() => window.location.replace("#ContactUs")}>
            <button className=" rounded-[0.563rem] bg-primaryTwo py-2 px-4 hover:bg-primaryThree hover:text-primaryOne">
              Get in Touch
            </button>
          </a>
        </li>
        <li>
          <a href="#!" onClick={() => window.location.replace("#!")} >
            <img src={navIcon} alt="Cart Icon" className="hover:text-green-900"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
