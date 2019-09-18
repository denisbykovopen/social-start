import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
// import SignUpPage from '../SignUp';
// import SignInPage from '../SignIn';
// import PasswordForgetPage from '../PasswordForget';
import UserPage from '../User';
import * as ROUTES from '../../constants/routes';
import Footer from '../Footer';
import Catalog from '../Catalog';
import Breed from '../Catalog/ConfigBreed';
import Goal from '../Catalog/ConfigGoal';
import Sex from '../Catalog/ConfigSex';
import Age from '../Catalog/ConfigAge';
import Registration from '../Catalog/ConfigRegistration';
import Search from '../Search';

const App = () => (
  <Router>
    <div className="app">
      <Navigation />
      <div className="app-inner">
        <Switch>
          <Route
            exact
            path={ROUTES.LANDING}
            component={LandingPage}
          />
          {/* <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
              path={ROUTES.PASSWORD_FORGET}
              component={PasswordForgetPage}
            /> */}
          <Route path={ROUTES.USER} component={UserPage} />
          <Route exact path={ROUTES.CATALOG} component={Catalog} />
          <Route exact path="/catalog/breed" component={Breed} />
          <Route exact path="/catalog/goal" component={Goal} />
          <Route exact path="/catalog/sex" component={Sex} />
          <Route exact path="/catalog/age" component={Age} />
          <Route
            exact
            path="/catalog/register"
            component={Registration}
          />
          <Route path={ROUTES.SEARCH} component={Search} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
