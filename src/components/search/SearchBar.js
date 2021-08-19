import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-state";
import test1 from "../../img/test-1.jpg";
import test2 from "../../img/test-2.jpg";
import test3 from "../../img/test-3.jpg";
import test4 from "../../img/test-4.jpg";

import classes from "./SearchBar.module.css";
import { filteredUsersActions } from "../../store/filtered-users";

// When a user creates an account this info will need to be part of the data sent to the database
const DUMMY_USERS = [
  {
    searchName: "jarrod gilliland",
    name: "Jarrod Gilliland",
    handle: "jarrodgilliland",
    img: test1,
  },
  {
    searchName: "joey brown",
    name: "Joey Brown",
    handle: "joeybrown",
    img: test2,
  },
  {
    searchName: "sarah jones",
    name: "Sarah Jones",
    handle: "thesarahjones",
    img: test3,
  },
  {
    searchName: "richard greer",
    name: "Richard Greer",
    handle: "heyimrich",
    img: test1,
  },
  {
    searchName: "bob marley",
    name: "Bob Marley",
    handle: "bobmarley",
    img: test2,
  },
  {
    searchName: "jessica davis",
    name: "Jessica Davis",
    handle: "jessdavies",
    img: test4,
  },
  {
    searchName: "cody ko",
    name: "Cody Ko",
    handle: "codyko",
    img: test1,
  },
  {
    searchName: "wanda smith",
    name: "Wanda Smith",
    handle: "smithwanda",
    img: test3,
  },
];

const SearchBar = () => {
  const dispatch = useDispatch();
  const inputOpen = useSelector((state) => state.ui.searchInput);

  const [userSearch, setUserSearch] = useState("");

  const searchQuery = (e) => {
    setUserSearch(e.target.value);
  };

  const openInputSearchHandler = () => {
    dispatch(uiActions.openSearchInput());
  };

  const closeInputSearchHandler = () => {
    dispatch(uiActions.closeSearchInput());
  };

  useEffect(() => {
    if (userSearch.length === 0) {
      dispatch(filteredUsersActions.filterUsers([]));
    } else {
      const lowerCaseUserSearch = userSearch.toLowerCase();
      const users = DUMMY_USERS.filter((user) =>
        user.searchName.includes(lowerCaseUserSearch)
      );
      dispatch(filteredUsersActions.filterUsers(users));
    }
  }, [userSearch, dispatch]);

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
      onBlur={closeInputSearchHandler}
    />
  );
};

export default SearchBar;
