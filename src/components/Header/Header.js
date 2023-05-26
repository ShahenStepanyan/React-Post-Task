import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

export const Header = ({ isLoggedIn, setIsLoggedIn, userName, setIsAdmin }) => {
  const handleLogOut = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userName')
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <header className={styles.mainHeader}>

      {
      
        isLoggedIn ?
        <nav>
         
          <NavLink
            onClick={handleLogOut}
            exact
            to="/login"
          >
            <MeetingRoomIcon />
            Exit
          </NavLink>
        </nav>

        : ''
      
      }

    </header>
  );
};
