import { Route, Switch, Redirect } from "react-router-dom";

import Auth from "./components/auth/Auth";
import CreatedProfilePage from "./components/auth/CreateProfilePage";
import MainLayout from "./components/layout/MainLayout";
import Feed from "./pages/Feed";
import Search from "./pages/Search";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import CreatePost from "./components/feed/CreatePost";
import ProfilePage from "./components/profile-page/ProfilePage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/auth" />
      </Route>
      <Route path="/auth" exact>
        <Auth />
      </Route>
      <Route path="/lets-get-started">
        <CreatedProfilePage />
      </Route>
      <Route path="/create-post">
        <CreatePost />
      </Route>
      <Route path="/main">
        <MainLayout>
          <Route path="/main/feed">
            <Feed /> {/*setPage may need depractaed*/}
          </Route>
          <Route path="/main/search">
            <Search />
          </Route>
          <Route path="/main/notifications">
            <Notifications />
          </Route>
          <Route path="/main/messages">
            <Messages />
          </Route>
        </MainLayout>
      </Route>
      <Route path="/profile/:userId">
        <ProfilePage>
          <Route path="/profile/:userId/tweets">
            <Feed />
          </Route>
        </ProfilePage>
      </Route>
      {/* When adding children in the future (tweets & replies, media, likes) we need to make sure it is a direct child of profile page for props to work */}
    </Switch>
  );
}

export default App;
