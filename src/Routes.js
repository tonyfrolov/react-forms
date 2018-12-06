import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// Helpers
import { APP_TOKEN } from './api/Constants';
// Utils
import PageLoader from './components/PageLoader';
import VtbHeader from './components/VtbHeader';

// Routes
const Account = lazy(() => import('./components/Account'));
const LoginPage = lazy(() => import('./components/Login/LoginPage'));
const ApprovalPage = lazy(() => import('./components/ApprovalPage'));
const ImplementorPage = lazy(() => import('./components/ImplementorPage'));
const NoMatchPage = lazy(() => import('./components/not-found/NoMatchPage'));

const Routes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      {/* Обернуть руты в компонент с header и container'ом где будут рендериться странички */}
      <VtbHeader />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route
          exact
          path="/login"
          render={props => {
            return APP_TOKEN.notEmpty ? <Redirect to="/auth" /> : <LoginPage {...props} />;
          }}
        />
        <Route
          path="/auth"
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
