import { useSelector } from "react-redux";
import { Fragment } from "react";

import classes from "./ComposeTweet.module.css";

const ComposeTweet = () => {
  const page = useSelector((state) => state.ui.curPage);

  return (
    <button className={classes["compose-tweet__btn"]}>
      {page !== "Messages" && (
        <Fragment>
          <p className={classes["compose-tweet"]}>+</p>
          <i className="fas fa-feather-alt"></i>
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
