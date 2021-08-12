import UserNav from "./UserNav";

import classes from "./MainLayout.module.css";

const MainLayout = (props) => {
  return (
    <main className={classes.main}>
      {/* Header component */}
      <div className={classes["main__content"]}>{props.children}</div>
      <UserNav />
    </main>
  );
};

export default MainLayout;
