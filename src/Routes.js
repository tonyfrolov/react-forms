import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// Helpers
import { APP_TOKEN } from './api/Constants';
// Utils
import PageLoader from './components/PageLoader';

// Routes
const AccountPage = lazy(() => import('./pages/AccountPage/'));
const LoginPage = lazy(() => import('./components/Login/LoginPage'));
const DecisionPreparePage = lazy(() => import('./pages/DecisionPreparePage/'));
const ImplementorPage = lazy(() => import('./pages/ImplementorPage/'));
const NoMatchPage = lazy(() => import('./pages/NotFound/NoMatchPage'));
const DecisionPage = lazy(() => import('./pages/DecisionPage/'));

const Routes = ({ addToNavBar, rollBackNavBar }) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route
          exact
          path="/login"
          render={props => {
            return APP_TOKEN.notEmpty ? <Redirect to="/account" /> : <LoginPage {...props} />;
          }}
        />
        <Route
          path="/account"
          render={props => {
            // return APP_TOKEN.notEmpty ? <AccountPage {...props} /> : <Redirect to="/login" />;
            return <AccountPage {...props} addToNavBar={addToNavBar} />;
          }}
        />
        <Route
          path="/preparation"
          render={() => <DecisionPreparePage rollBackNavBar={rollBackNavBar} />}
        />
        <Route path="/decision" render={() => <DecisionPage rollBackNavBar={rollBackNavBar} />} />
        <Route
          path="/implementor"
          render={() => <ImplementorPage rollBackNavBar={rollBackNavBar} />}
        />
        <Route component={NoMatchPage} />
      </Switch>
    </Suspense>
  );
};

Routes.propTypes = {
  location: PropTypes.object, // React Router Passed Props
};

export default Routes;
