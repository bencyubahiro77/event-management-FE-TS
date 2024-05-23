import  { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, } from "@fortawesome/free-solid-svg-icons";
import Logout from "@/utils/Logout"

const NavBar : React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen , setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const toggleDropdown = () =>{
    setIsDropdownOpen(prev => !prev);
  }

  return (
    <nav className="flex items-center justify-between xl:pl-16 xl:pr-16 gradient bg-red-400 h-20 p-4 fixed w-full">
      <h1 className="text-2xl secondary-color font-extrabold ">
        <h3
         className="cursor-pointer"
        >
          BENO
        </h3>
      </h1>
      <div>

        <div
          data-testid="menu"
          className={`${
            isMenuOpen ? 'block gradient' : 'hidden'
          } xl:flex items-center secondary-color gap-3 font-bold cursor-pointer list-none transition-all md:gradient  xl:space-x-4 xl:ml-3 absolute left-0 w-full xl:w-auto xl:static xl:h-auto xl:bg-transparent mt-8 xl:mt-0`}
        >
          <li className="y-6 xl:my-0 ml-4 mr-4 my-6">
            <h3
              className="my-6 no-underline secondary-color text-[#170e7d] font-bold xl:my-0 hover:text-[#170e7d]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </h3>
          </li>
          <li className="y-6 xl:my-0 ml-4 my-8 ">
            <h3
         
              className="my-6 no-underline secondary-color text-[#170e7d] font-bold xl:my-0 hover:text-[#170e7d]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </h3>
          </li>
          <li className="y-6 xl:my-0  secondary-color hover:main-colorr  font-bold ml-4 mr-4 my-8">
            <h3
    
             className="my-6 no-underline secondary-color text-[#170e7d] font-bold xl:my-0 hover:text-[#170e7d]"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </h3>
          </li>
          <li className="y-6 xl:my-0  secondary-color  font-bold ml-4 mr-4 my-8">
            <h3
              className="my-6 no-underline secondary-color text-[#170e7d] font-bold xl:my-0 hover:text-[#170e7d]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </h3>
          </li>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="relative w-12 h-12 bg-white border-2 border-black rounded-full flex justify-center items-center cursor-pointer" onClick={toggleDropdown}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsINb1d8ywbfMuXlTbDb0afkOhmdEIg19xNg&s" alt="Profile Image" className="w-full h-full rounded-full object-cover" />
          {isDropdownOpen && (
            <div className="absolute top-full mt-5 bg-white border border-gray-200 rounded shadow-md w-32 list-none">
              <Logout/>
            </div>
          )}
        </div>
        <div className="xl:hidden">
            <button
              className=" secondary-color font-work-sans text-4xl"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;