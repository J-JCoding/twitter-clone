import { Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import Auth from "./components/auth/Auth";
import MainLayout from "./components/layout/MainLayout";
import Feed from "./pages/Feed";
import Search from "./pages/Search";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import CreatePost from './components/feed/CreatePost';

import Test from "./pages/Test";

function App() {
  const [userPage, setUserPage] = useState("");

  const currentPage = (page) => {
    setUserPage(page);
  };

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/auth" />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/create-post">
        <CreatePost />
      </Route>
      <Route path="/main">
        <MainLayout curPage={userPage}>
          <Route path="/main/feed">
            <Feed setPage={currentPage} /> {/*<Test setPage={currentPage} />*/}
          </Route>
          <Route path="/main/search">
            <Search setPage={currentPage} />
          </Route>
          <Route path="/main/notifications">
            <Notifications setPage={currentPage} />
          </Route>
          <Route path="/main/messages">
            <Messages setPage={currentPage} />
          </Route>
        </MainLayout>
      </Route>
    </Switch>
  );
}

export default App;
