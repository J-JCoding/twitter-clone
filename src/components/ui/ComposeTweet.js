import classes from "./ComposeTweet.module.css";

const ComposeTweet = () => {
  return (
    <div className={classes["compose-tweet__container"]}>
      <p>+</p>
      <i className="fas fa-feather-alt"></i>
    </div>
  );
};

export default ComposeTweet;
