// THIS COMPONENT SHOULD BE DELETED WHEN FEED IS FINISHED

//import classes from "./Test.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-state";

import Post from "../components/feed/Post";

function Test(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.setCurPage("Feed"));
  }, [dispatch]);

  return (
    // <div className={classes.test}>
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Test;
