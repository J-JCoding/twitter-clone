import { useSelector } from "react-redux";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import classes from "./ComposeTweet.module.css";

const ComposeTweet = () => {
  const page = useSelector((state) => state.ui.curPage);

  return (
    <button className={classes["compose-tweet__btn"]}>
      {page !== "Messages" && (
        <Fragment>
          <NavLink to="/create-post" className={classes['nav-links']}>
            <p className={classes["compose-tweet"]}>+</p>
            <i className="fas fa-feather-alt"></i>
          </NavLink>
        </Fragment>
      )}
      {page === "Messages" && (
        <i className={`fas fa-envelope ${classes["compose-message"]}`}>
          {" "}
          <p>+</p>
        </i>
      )}
    </button>
  );
};

export default ComposeTweet;
