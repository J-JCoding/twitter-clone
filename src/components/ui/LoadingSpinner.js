import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes["spinner-container"]}>
      <i className={`fas fa-spinner ${classes.spinner}`}></i>
    </div>
  );
};

export default LoadingSpinner;
