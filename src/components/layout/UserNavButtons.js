import { Fragment } from "react";

import classes from "./UserNavButtons.module.css";

const UserNavButtons = () => {
  return (
    <Fragment>
      <button className={classes.button}>
        <i className="fas fa-home" id={classes.active}></i>
      </button>
      <button className={classes.button}>
        <i className="fas fa-search"></i>
      </button>
      <button className={classes.button}>
        <i className="fas fa-bell"></i>
      </button>
      <button className={classes.button}>
        <i className="fas fa-envelope"></i>
      </button>
    </Fragment>
  );
};

export default UserNavButtons;
