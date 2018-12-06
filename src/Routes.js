import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// Helpers
import { APP_TOKEN } from './api/Constants';
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
            return APP_TOKEN.notEmpty ? <Redirect to="/account" /> : <LoginPage {...props} />;
          }}
        />
        <Route
          path="/account"
          render={props => {
            // return APP_TOKEN.notEmpty ? <AuthLayout {...props} /> : <Redirect to="/login" />;
            return <Account {...props} />;
          }}
        />
        <Route path="/approval" component={ApprovalPage} />
        <Route path="/implementor" component={ImplementorPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </Suspense>
  );
};

Routes.propTypes = {
  location: PropTypes.object, // React Router Passed Props
};

export default Routes;
