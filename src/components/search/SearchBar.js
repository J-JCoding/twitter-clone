import { useState, useEffect } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const [userSearch, setUserSearch] = useState("");

  const searchQuery = (e) => {
    setUserSearch(e.target.value);
  };

  //   useEffect(() => {
  //     const users = DUMMY_USERS.filter((user) => user.name.includes(userSearch));
  //     console.log(users);
  //   }, [userSearch]);

  return (
    <input
      onChange={searchQuery}
      className={classes["search-bar"]}
      placeholder="Search Twitter"
    />
  );
};

export default SearchBar;
