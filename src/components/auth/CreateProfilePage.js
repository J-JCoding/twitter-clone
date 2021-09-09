import { useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import classes from "./CreateProfilePage.module.css";

const CreateProfilePage = () => {
  const history = useHistory();
  const localId = useSelector((state) => state.ui.localId);

  const nameInputRef = useRef();
  const handleInputRef = useRef();
  const locationInputRef = useRef();
  const birthdayInputRef = useRef();

  const submitCreateProfile = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredHandle = handleInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredBirthday = birthdayInputRef.current.value;
    const searchName = enteredName.toLowerCase();

    const userProfileInit = {
      name: enteredName,
      handle: enteredHandle,
      id: localId,
      bio: "",
      profileImg: "urltosomethingrandom/pic?=img",
      headerImg: "urltosomethingrandom/header?=img234534343",
      searchName: searchName,
      location: enteredLocation,
      birthday: enteredBirthday,
      posts: [],
      postsReplies: [],
      media: [],
      likes: [],
      followers: 0,
      following: 0,
    };

    history.replace("/main/feed"); // this will redirect to users feed when data is set up
    console.log(userProfileInit);
  };

  return (
    <div className={classes["create-profile"]}>
      <p>Let's Get Started!</p>
      <form onSubmit={submitCreateProfile}>
        <input
          type="text"
          placeholder="Enter your name"
          ref={nameInputRef}
          required
        />
        <input
          type="text"
          placeholder="Enter your handle"
          ref={handleInputRef}
          required
        />
        <input
          type="text"
          placeholder="Enter your location (optional)"
          ref={locationInputRef}
        />
        <input
          type="text"
          placeholder="Enter your birthday (optional)"
          ref={birthdayInputRef}
        />

        <button className={classes.submit}>Get Started</button>
      </form>
    </div>
  );
};

export default CreateProfilePage;
