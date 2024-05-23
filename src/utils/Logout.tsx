import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); 
    navigate('/'); 
  };

  return (
   <div>
     <h3
        className="text-black cursor-pointer  px-2 py-2 rounded-lg"
        onClick={handleLogout}
    >
        <FontAwesomeIcon
        icon={faArrowRightFromBracket}
        className="mr-2 ml-2 text-black"
        />
        Logout
    </h3>
   </div>
  );
};

export default LogoutButton;
