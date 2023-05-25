import { NavLink } from "react-router-dom";
import Logo from "../../../icons/Logo.svg";
import HomeIcon from "../../../icons/Home.svg";
import CoursesIcon from "../../../icons/Courses.svg";
import LibrariesIcon from "../../../icons/Libraries.svg";
import StatisticsIcon from "../../../icons/Statistics.svg";
import GuidelineIcon from "../../../icons/Guideline.svg";
import LogoutIcon from "../../../icons/Logout.svg";
import styles from "./Menu.module.scss";
export const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <img src={Logo} className={styles.logo} alt="logo" />
      <nav className={styles.navigation}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeMenuItem : styles.menuItem
          }
        >
          <img src={HomeIcon} alt="home" className={styles.icon} />
          <span className={styles.title}>Home</span>
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? styles.activeMenuItem : styles.menuItem
          }
        >
          <img src={CoursesIcon} alt="courses" className={styles.icon} />
          <span className={styles.title}>Courses</span>
        </NavLink>
        <NavLink
          to="/libraries"
          className={({ isActive }) =>
            isActive ? styles.activeMenuItem : styles.menuItem
          }
        >
          <img src={LibrariesIcon} alt="libraries" className={styles.icon} />
          <span className={styles.title}>Libraries</span>
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive ? styles.activeMenuItem : styles.menuItem
          }
        >
          <img src={StatisticsIcon} alt="statistics" className={styles.icon} />
          <span className={styles.title}>Statistics</span>
        </NavLink>
        <div className={styles.divider} />
        <NavLink
          to="/guideline"
          className={({ isActive }) =>
            isActive ? styles.activeMenuItem : styles.menuItem
          }
        >
          <img src={GuidelineIcon} alt="guideline" className={styles.icon} />
          <span className={styles.title}>Users Guideline</span>
        </NavLink>
      </nav>

      <button className={styles.signOutBtn} onClick={() => undefined}>
        <img src={LogoutIcon} alt="btn" />
        <span className={styles.btnTitle}>Sign Out</span>
      </button>
    </div>
  );
};
