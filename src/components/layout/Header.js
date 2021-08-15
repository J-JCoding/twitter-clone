import logo from "../../img/twitter-logo.png";
import pfp from "../../img/test-pfp.jpg";

import SearchBar from "../search/SearchBar";

import classes from "./Header.module.css";

const Header = (props) => {
  const page = props.page;

  let headerContent;

  if (page === "Search") {
    headerContent = <SearchBar />;
  }
  if (page === "Notifications") {
    headerContent = <p>Notifications</p>;
  }
  if (page === "Messages") {
    headerContent = <p>Messages</p>;
  }

  return (
    <header className={classes.header}>
      <div className={classes["header__pfp"]}>
        <img className={classes["header__pfp--img"]} src={pfp} alt="profile" />
      </div>

      <div className={classes["header__content"]}>
        <img
          className={
            page === "Feed" ? classes["header__content--img"] : classes.remove
          }
          src={logo}
          alt="twitter clone logo"
        />
        {headerContent}
      </div>

      <div className={classes["header__settings"]}>
        <i className={`fas fa-cog ${classes["header__settings--icon"]}`}></i>
      </div>
    </header>
  );
};

export default Header;
