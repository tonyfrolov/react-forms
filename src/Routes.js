import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// Helpers
import { APP_AUTH } from './api/Constants';
// Utils
import PageLoader from './components/PageLoader';

// Routes
const Account = lazy(() => import('./pages/AccountPage/'));
const LoginPage = lazy(() => import('./components/Login/LoginPage'));
const ApprovalPage = lazy(() => import('./pages/ApprovalPage/'));
const ImplementorPage = lazy(() => import('./pages/ImplementorPage/'));
const NoMatchPage = lazy(() => import('./pages/NotFound/NoMatchPage'));

const Routes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route
          exact
          path="/login"
          render={props => {
            return APP_AUTH.notEmpty ? <Redirect to="/account" /> : <LoginPage {...props} />;
          }}
        />
        <Route
          path="/account"
          render={props => {
            return APP_AUTH.notEmpty ? <Account {...props} /> : <Redirect to="/login" />;
          }}
        />
        <Route
          path="/approval"
          render={props => {
            return APP_AUTH.notEmpty ? <ApprovalPage {...props} /> : <Redirect to="/login" />;
          }}
        />
        <Route
          path="/implementor"
          render={props => {
            return APP_AUTH.notEmpty ? <ImplementorPage {...props} /> : <Redirect to="/login" />;
          }}
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
