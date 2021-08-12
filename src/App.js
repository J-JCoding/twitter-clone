import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Test from "./pages/Test";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/auth" />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <MainLayout>
        <Route path="/home">
          <Test /> {/* <Feed /> when ready  */}
        </Route>
      </MainLayout>
    </Switch>
  );
}

export default App;
