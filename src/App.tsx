import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import {
  About,
  Contacts,
  Actions,
  Blog,
  Partnership,
  Products,
  Service,
  Shipping,
  TestDrive,
  Error,
  AuthWrapper,
} from "./components/pages";
import Footer from "./components/Footer";
import { PageRoute } from "./consts/menu";
import HomePage from "./components/pages/HomePage";

const App: FC = () => {
  return (
    <AuthWrapper>
      <Router>
        <Header />
        <Switch>
          <Route path={PageRoute.main.route} exact>
            <HomePage />
          </Route>
          <Route path={PageRoute.about.route} exact>
            <About />
          </Route>
          <Route path={PageRoute.actions.route} exact>
            <Actions />
          </Route>
          <Route path={PageRoute.blog.route} exact>
            <Blog />
          </Route>
          <Route path={PageRoute.contacts.route} exact>
            <Contacts />
          </Route>
          <Route path={PageRoute.partnership.route} exact>
            <Partnership />
          </Route>
          <Route path={PageRoute.products.route} exact>
            <Products />
          </Route>
          <Route path={PageRoute.service.route} exact>
            <Service />
          </Route>
          <Route path={PageRoute.shipping.route} exact>
            <Shipping />
          </Route>
          <Route path={PageRoute.testDrive.route} exact>
            <TestDrive />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
};

export default App;
