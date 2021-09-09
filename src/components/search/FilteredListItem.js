import classes from "./FilteredListItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filteredUsersActions } from "../../store/filtered-users";

const FilteredListItem = (props) => {
  const dispatch = useDispatch();
  const searchedUserInfo = useSelector((state) => state.users.users);

  const selectUserHandler = () => {
    const searchedId = props.id;
    const findUser = searchedUserInfo.find((user) => user.id === searchedId);

    dispatch(filteredUsersActions.addSearchedUser(findUser));
  };

  return (
    <li className={classes.item} onClick={selectUserHandler}>
      <div className={classes["item__pfp-container"]}>
        <img className={classes["item__pfp-img"]} src={props.img} alt="user" />
      </div>
      <div className={classes["item__user-info"]}>
        <p className={classes["item__user-info--name"]}>{props.name}</p>
        <p className={classes["item__user-info--handle"]}>@{props.handle}</p>
      </div>
    </li>
  );
};

export default FilteredListItem;
