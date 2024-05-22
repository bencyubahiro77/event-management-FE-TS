import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar : React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between pl-16 pr-16 gradient bg-red-400 h-20 p-4 fixed w-full">
      <h1 className="text-2xl secondary-color font-extrabold ">
        <h3
         className="cursor-pointer"
        >
          BENO
        </h3>
      </h1>
      <div>
        <div className="xl:hidden">
          <button
            className=" secondary-color font-work-sans text-2xl "
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <div
          data-testid="menu"
          className={`${
            isMenuOpen ? 'block gradient' : 'hidden'
          } xl:flex items-center secondary-color gap-3 font-bold cursor-pointer list-none transition-all md:gradient ease-in-out duration-300 xl:space-x-4 xl:ml-3 absolute left-0 w-full xl:w-auto xl:static xl:h-auto xl:bg-transparent mt-2 xl:mt-0`}
        >
          <li className="y-6 xl:my-0 ml-4 mr-4 my-6">
            <h3
              className="my-6 no-underline secondary-color text-[#170e7d] font-bold xl:my-0 hover:text-[#170e7d]"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </h3>
          </li>
          <li className="y-6 xl:my-0 ml-4 my-8 ">
            <h3
         
              className="my-6 no-underline secondary-color text-[#170e7d] font-bold xl:my-0 hover:text-[#170e7d]"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </h3>
          </li>
          <li className="y-6 xl:my-0  secondary-color hover:main-colorr  font-bold ml-4 mr-4 my-8">
            <h3
    
             className="my-6 no-underline secondary-color text-[#170e7d] font-bold xl:my-0 hover:text-[#170e7d]"
              onClick={() => setIsMenuOpen(false)}
            >
              PROJECTS
            </h3>
          </li>
          <li className="y-6 xl:my-0  secondary-color  font-bold ml-4 mr-4 my-8">
            <h3
              className="my-6 no-underline secondary-color text-[#170e7d] font-bold xl:my-0 hover:text-[#170e7d]"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </h3>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;