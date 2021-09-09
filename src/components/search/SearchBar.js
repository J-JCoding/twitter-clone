import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-state";

import classes from "./SearchBar.module.css";
import { filteredUsersActions } from "../../store/filtered-users";

const SearchBar = () => {
  const dispatch = useDispatch();
  const inputOpen = useSelector((state) => state.ui.searchInput);
  const appUsers = useSelector((state) => state.appUsers.users);

  const [userSearch, setUserSearch] = useState("");

  const searchQuery = (e) => {
    setUserSearch(e.target.value);
  };

  const openInputSearchHandler = () => {
    dispatch(uiActions.openSearchInput());
  };

  useEffect(() => {
    if (userSearch.length === 0) {
      dispatch(filteredUsersActions.filterUsers([]));
    } else {
      const lowerCaseUserSearch = userSearch.toLowerCase();
      const users = appUsers.filter((user) =>
        user.searchName.includes(lowerCaseUserSearch)
      );
      dispatch(filteredUsersActions.filterUsers(users));
    }
  }, [userSearch, dispatch, appUsers]);

  return (
    <input
      onChange={searchQuery}
      className={
        !inputOpen
          ? classes["search-bar"]
          : `${classes["search-bar"]} ${classes["search-bar__open"]}`
      }
      placeholder="Search Twitter"
      onClick={openInputSearchHandler}
    />
  );
};

export default SearchBar;
