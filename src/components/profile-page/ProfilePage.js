import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import UserNav from "../layout/UserNav";
import classes from "./ProfilePage.module.css";
import ProfileNav from "./ProfileNav";
import ProfilePictureView from "./ProfilePictureView";

const ProfilePage = (props) => {
  // Test state for button
  const [isFollowing, setIsFollowing] = useState(false);

  const history = useHistory();
  // const [fixedNav, setFixedNav] = useState(false);
  const [viewPfp, setViewPfp] = useState(false);
  const currentProfile = useSelector((state) => state.users.searchedUser);

  const localId = useSelector((state) => state.ui.localId);
  let { userId } = useParams();

  const localUser = localId === userId; // checking to see if the user profile is equal to the local user

  //////// THIS WILL NEED ADDED BACK IN LATER, CURRENTLY HAS BUG ////////
  // useEffect(() => {
  //   const infoPage = document.querySelector(".info-observe");

  //   const fixedNavOnScroll = function (entries, observer) {
  //     const [entry] = entries;
  //     if (entry.isIntersecting) {
  //       setFixedNav(false);
  //     } else {
  //       setFixedNav(true);
  //     }
  //   };

  //   const fixedNavScrollObserver = new IntersectionObserver(fixedNavOnScroll, {
  //     root: null,
  //     threshold: 0,
  //   });

  //   fixedNavScrollObserver.observe(infoPage);
  // });

  const goBack = () => {
    history.replace("/main/search");
  };

  const toggleViewPfpHandler = () => {
    setViewPfp((prevState) => !prevState);
  };

  const followUserHandler = () => {
    setIsFollowing((prevState) => !prevState);
  };

  let actionButtonClass;
  if (isFollowing) {
    actionButtonClass = classes["btn-main"];
  } else {
    actionButtonClass = `${classes["btn-main"]} ${classes["btn-main-alt"]}`;
  }

  return (
    <div className={classes.profile}>
      {/* Back button */}
      <button className={classes.back} onClick={goBack}>
        <i className="fas fa-arrow-left"></i>
      </button>

      {/* Header image */}
      <div className={classes["header-container"]}>
        <img
          className={classes["header-img"]}
          src={currentProfile.headerImg}
          alt="header"
        />
      </div>

      {/* Main info */}
      <div className={classes["profile-main"]}>
        <div className={`${classes["profile-info"]} info-observe`}>
          <div className={classes["profile-img__container"]}>
            <img
              className={classes["profile-img"]}
              src={currentProfile.img}
              alt="user"
              onClick={toggleViewPfpHandler}
            />
          </div>
          <div className={classes.info}>
            <div className={classes["profile-name"]}>
              <p className={classes.name}>{currentProfile.name} </p>
              <p className={classes.handle}>
                @{currentProfile.handle}{" "}
                {currentProfile.followsYou && (
                  <span className={classes.badge}>Follows you</span>
                )}
              </p>
            </div>
            {currentProfile.bio && (
              <div className={classes.bio}>
                <p>{currentProfile.bio}</p>
              </div>
            )}
            {currentProfile.location && (
              <div className={classes.location}>
                <i className="fas fa-map-marker-alt"></i>
                <p>{currentProfile.location}</p>
              </div>
            )}
            <div className={classes.follows}>
              <p>
                {currentProfile.following}{" "}
                <span className={classes.light}>Following</span>
              </p>
              <p>
                {currentProfile.followers}{" "}
                <span className={classes.light}>Followers</span>
              </p>
            </div>
          </div>
          {localUser && (
            <button className={classes["btn-main"]}>Edit Profile</button>
          )}
          {!localUser && (
            <button className={actionButtonClass} onClick={followUserHandler}>
              {!isFollowing ? "Follow" : "Following"}
            </button>
          )}
        </div>
        <div className={classes["profile-activity"]}>
          <ProfileNav /> {/* fixedNav={fixedNav ? classes["fixed-nav"] : ""} */}
          <div className={classes.main}>{props.children}</div>
        </div>
      </div>

      {/* User nav */}
      <UserNav />

      {viewPfp && <ProfilePictureView closePfp={toggleViewPfpHandler} />}
    </div>
  );
};

export default ProfilePage;
