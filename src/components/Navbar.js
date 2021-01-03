import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { isMobileOnly, isBrowser } from "react-device-detect";
import menu from "../icons/hamburgerMenu.png";

function mobileNav() {
  return (
    <header className="bg-gray-600 min-w-max">
      <div className="container mx-auto md:flex md:justify-between">
        <nav className="flex flex-col sm:flex-row ">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center md:py-6 px-3 mr-4 text-white hover:text-blue-400 text-5xl font-bold cursive tracking-widest"
          >
            Sean
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-400 text-1.5xl"
          >
            Work Experience
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-400 text-1.5xl"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-400 text-1.5xl"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.instagram.com/seanbrasse/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/sean-brasse/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon
            url="https://github.com/seanbrasse"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
        </div>
      </div>
    </header>
  );
}

function hide(id) {
  var element = document.getElementById(id);
  element.style.display = "none";
}

function toggle(id) {
  var element = document.getElementById(id);
  if (element.style.display == "") {
    element.style.display = "none";
  } else {
    element.style.display = "";
  }
}

// function changeNav() {
//   if (isBrowser) {
//     return (
//       <header className="bg-gray-600 min-w-max" id="toHide">
//         <button className="inline-flex" onClick={() => hideSomething()}>
//           <img src={menu} />
//         </button>
//       </header>
//     );
//   }
// }

function navi() {
  // <button className='inline-flex'><img src={menu}/></button>
  return (
    <header className="bg-gray-600 min-w-max">
      <button
        className="inline-flex"
        id="buttonNav"
        onClick={() => toggle("normalNav")}
      >
        <img src={menu} />
      </button>
      <div
        className="container mx-auto p-3 md:flex md:justify-between"
        id="normalNav"
      >
        <nav className="flex flex-col sm:flex-row ">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center md:py-6 px-3 mr-4 text-white hover:text-blue-400 text-5xl font-bold cursive tracking-widest"
          >
            Sean
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-400 text-1.5xl"
          >
            Work Experience
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-400 text-1.5xl"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-400 text-1.5xl"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.instagram.com/seanbrasse/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/sean-brasse/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon
            url="https://github.com/seanbrasse"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
        </div>
      </div>
    </header>
  );
  //   } else {
  //     return (
  //       <header className="bg-gray-600 min-w-max">
  //         <button className="inline-flex" onClick={() => hideSomething()}>
  //           <img src={menu} />
  //         </button>
  //       </header>
  //     );
  //   }
}

export default function NavBar() {
  return (
    <header className="bg-gray-600 min-w-max">
      {navi()}
      {/* <button className='inline-flex' onClick={mobileNav()}><img src={menu}/></button> */}
      {/* {mobileNav()} */}
    </header>
  );
}

window.onload = function () {
  if (!isMobileOnly) {
    hide("buttonNav");
  } else {
    hide("normalNav");
  }
};
