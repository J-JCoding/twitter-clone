import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-state";
import { filteredUsersActions } from "../../store/filtered-users";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import logo from "../../img/twitter-logo.png";
import SearchBar from "../search/SearchBar";

import classes from "./Header.module.css";

const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.ui.curPage);
  const inputOpen = useSelector((state) => state.ui.searchInput);

  const appUsers = useSelector((state) => state.appUsers.users);
  const localId = useSelector((state) => state.ui.localId);
  const localUser = appUsers.find((user) => user.id === localId);

  useEffect(() => {
    if (page !== "Search") {
      dispatch(uiActions.closeSearchInput()); // Resets the header if page is not equal to Search. Used it in app because multiple components needed this function so using it once was easier
    }
  }, [dispatch, page]);

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

  const closeInputSearchHandler = () => {
    dispatch(uiActions.closeSearchInput());
  };

  const setLocalUserHandler = () => {
    const verifyLocalUser = appUsers.find((user) => user.id === localId);
    dispatch(filteredUsersActions.addSearchedUser(verifyLocalUser));

    history.push(`/profile/${localId}/tweets`);
  };

  return (
    <header className={classes.header}>
      {/* Users profile image/button in header */}
      {!inputOpen && (
        <div className={classes["header__pfp"]}>
          <img
            className={classes["header__pfp--img"]}
            src={localUser.img}
            alt="profile"
            onClick={setLocalUserHandler}
          />
        </div>
      )}

      {/* Page content in header */}
      <div
        className={
          !inputOpen
            ? classes["header__content"]
            : `${classes["header__content"]} ${classes["input-open"]}`
        }
      >
        <img
          className={
            page === "Feed" ? classes["header__content--img"] : classes.remove
          }
          src={logo}
          alt="twitter clone logo"
        />
        {headerContent}
      </div>

      {/* Alt icons in the header (settings, cancel button, tweet button) */}
      <div className={classes["header__settings"]}>
        {!inputOpen && (
          <i className={`fas fa-cog ${classes["header__settings--icon"]}`}></i>
        )}
        {inputOpen && (
          <p
            onClick={closeInputSearchHandler}
            style={{ marginRight: "1.75rem" }}
          >
            Cancel
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
