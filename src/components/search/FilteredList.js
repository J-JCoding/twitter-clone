import FilteredListItem from "./FilteredListItem";
import classes from "./FilteredList.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
          <Link to={`/profile/${user.id}/tweets`} key={user.id}>
            <FilteredListItem
              id={user.id}
              name={user.name}
              handle={user.handle}
              img={user.img}
            />
          </Link>
        ))}
    </ul>
  );
};

export default FilteredList;
