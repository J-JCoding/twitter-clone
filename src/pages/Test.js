// THIS COMPONENT SHOULD BE DELETED WHEN FEED IS FINISHED

//import classes from "./Test.module.css";
import { useEffect } from "react";
import Post from '../components/feed/Post';

function Test(props) {
  useEffect(() => {
    props.setPage("Feed");
  }, []);

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
