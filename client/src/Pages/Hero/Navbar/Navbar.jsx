
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import churchLogo from "../../../static/church_logo.jpg";

const navItems = [
  { id: 1, text: "About", link: "#about" },
  { id: 2, text: "Mission", link: "#mission" },
  { id: 3, text: "Beliefs", link: "#beliefs" },
  { id: 4, text: "Activities", link: "#yearly-activities" },
  { id: 5, text: "Members",link:"#officials" },
  { id: 6, text: "Gallery", link: "#gallery" },

  { id: 7, text: "Location", link: "#location" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={churchLogo} alt="Church Logo" className="h-8 w-auto mr-2" />
            <span className="text-lg font-semibold text-gray-800">International Christian Worship Center</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => setNav(false)}
              >
                {item.text}
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={handleNav}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {nav && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setNav(false)}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
