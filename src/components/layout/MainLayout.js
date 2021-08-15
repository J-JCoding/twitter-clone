import Header from "./Header";
import UserNav from "./UserNav";

import classes from "./MainLayout.module.css";

const MainLayout = (props) => {
  const page = props.curPage;

  return (
    <main className={classes.main}>
      <Header page={page} />
      <div className={classes["main__content"]}>{props.children}</div>
      <UserNav />
    </main>
  );
};

export default MainLayout;
