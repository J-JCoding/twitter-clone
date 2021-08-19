import FilteredListItem from "./FilteredListItem";
import classes from "./FilteredList.module.css";
import { useSelector } from "react-redux";

const FilteredList = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <ul className={classes.list}>
      {users.length === 0 && (
        <p className={classes["list-default"]}>
          Try searching for people, topics, or keywords.
        </p>
      )}
      {users.length > 0 &&
        users.map((user) => (
          <FilteredListItem
            key={Math.random()} // Poor key will need to make better one later
            name={user.name}
            handle={user.handle}
            img={user.img}
          />
        ))}
    </ul>
  );
};

export default FilteredList;
