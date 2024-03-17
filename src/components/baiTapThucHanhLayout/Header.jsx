import React from "react";

const Header = () => {
  return (
    <div className="w-100 bg-black">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <a className="text-white text-xl" href="">
          Start Bootstrap
        </a>
        <ul className="flex items-center space-x-2 ">
          <li>
            <a className="text-white font-medium  " href="#">
              Home
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 hover:text-gray-200 font-medium"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-gray-400  hover:text-gray-200 font-medium"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
