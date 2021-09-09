import classes from "./ProfilePictureView.module.css";
import { useSelector } from "react-redux";

const ProfilePictureLarge = (props) => {
  const currentProfile = useSelector((state) => state.users.searchedUser);

  return (
    <div className={classes["enlarged-pfp"]}>
      <i
        className={`fas fa-times ${classes.close}`}
        onClick={props.closePfp}
      ></i>
      <div>
        <img src={currentProfile.img} alt="user" />
      </div>
    </div>
  );
};

export default ProfilePictureLarge;
