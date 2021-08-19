import Header from "./Header";
import UserNav from "./UserNav";
import ComposeTweet from "../ui/ComposeTweet";

import classes from "./MainLayout.module.css";

const MainLayout = (props) => {
  return (
    <main className={classes.main}>
      <Header />
      <div className={classes["main__content"]}>
        {props.children}
        <ComposeTweet />
      </div>
      <UserNav />
    </main>
  );
};

export default MainLayout;
