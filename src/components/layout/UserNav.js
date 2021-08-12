import UserNavButtons from "./UserNavButtons";

import classes from "./UserNav.module.css";

const UserNav = () => {
  return (
    <nav className={classes.nav}>
      <UserNavButtons />
    </nav>
  );
};

export default UserNav;
