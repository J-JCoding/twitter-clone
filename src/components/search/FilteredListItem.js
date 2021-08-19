import classes from "./FilteredListItem.module.css";
import pfp from "../../img/test-pfp.jpg";

const FilteredListItem = (props) => {
  return (
    <li className={classes.item}>
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
