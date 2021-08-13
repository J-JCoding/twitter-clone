import { NavLink } from "react-router-dom";
import classes from "./UserNavButtons.module.css";

const UserNavButtons = () => {
  return (
    <div className={classes["nav-links"]}>
      <NavLink to="/main/feed" activeClassName={classes.active}>
        <i className="fas fa-home"></i>
      </NavLink>
      <NavLink to="/main/search" activeClassName={classes.active}>
        <i className="fas fa-search"></i>
      </NavLink>
      <NavLink to="/main/notifications" activeClassName={classes.active}>
        <i className="fas fa-bell"></i>
      </NavLink>
      <NavLink to="/main/messages" activeClassName={classes.active}>
        <i className="fas fa-envelope"></i>
      </NavLink>
    </div>
  );
};

export default UserNavButtons;
