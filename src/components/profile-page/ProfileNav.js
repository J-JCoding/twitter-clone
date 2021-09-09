import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./ProfileNav.module.css";

const ProfileNav = (props) => {
  const currentProfile = useSelector((state) => state.users.searchedUser);

  return (
    <nav className={`${classes.nav} ${props.fixedNav}`}>
      <NavLink
        to={`/profile/${currentProfile.id}/tweets`}
        activeClassName={classes.active}
      >
        <p>Tweets</p>
      </NavLink>
      <NavLink
        to={`/profile/${currentProfile.id}/tweets-replies`}
        activeClassName={classes.active}
      >
        <p>Tweets & replies</p>
      </NavLink>
      <NavLink
        to={`/profile/${currentProfile.id}/media`}
        activeClassName={classes.active}
      >
        <p>Media</p>
      </NavLink>
      <NavLink
        to={`/profile/${currentProfile.id}/likes`}
        activeClassName={classes.active}
      >
        <p>Likes</p>
      </NavLink>
    </nav>
  );
};

export default ProfileNav;
