import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "./components/auth/Auth";
import MainLayout from "./components/layout/MainLayout";
import Feed from "./pages/Feed";
import Search from "./pages/Search";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";

import Test from "./pages/Test";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/auth" />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/main">
        <MainLayout>
          <Route path="/main/feed">
            <Test /> {/* <Feed /> when ready  */}
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
    </Switch>
  );
}

export default App;
