// THIS COMPONENT SHOULD BE DELETED WHEN FEED IS FINISHED

import classes from "./Test.module.css";
import { useEffect } from "react";

function Test(props) {
  useEffect(() => {
    props.setPage("Feed");
  }, []);

  return (
    <div className={classes.test}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Test;
