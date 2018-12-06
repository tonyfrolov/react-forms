import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// Helpers
import { APP_TOKEN } from './api/Constants';
// Utils
import PageLoader from './modules/common/PageLoader';
import VtbHeader from './modules/common/VtbHeader';

// Routes
const Account = lazy(() => import('./modules/auth/layout/Account'));
const LoginPage = lazy(() => import('./modules/public/login/LoginPage'));
const ApprovalPage = lazy(() => import('./modules/public/approval/ApprovalPage'));
const ImplementorPage = lazy(() => import('./modules/public/implementor/ImplementorPage'));
const NoMatchPage = lazy(() => import('./modules/not-found/NoMatchPage'));

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
