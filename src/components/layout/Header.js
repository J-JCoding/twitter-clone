import logo from "../../img/twitter-logo.png";
import pfp from "../../img/test-pfp.jpg";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["header__pfp"]}>
        <img className={classes["header__pfp--img"]} src={pfp} alt="profile" />
      </div>

      <div className={classes["header__logo"]}>
        <img
          className={classes["header__logo--img"]}
          src={logo}
          alt="twitter clone logo"
        />
      </div>

      <div className={classes["header__settings"]}>
        <i className={`fas fa-cog ${classes["header__settings--icon"]}`}></i>
      </div>
    </header>
  );
};

export default Header;
