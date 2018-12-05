import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Common Components
import { withStyles } from '@material-ui/core/styles';
// Routes
import Routes from './Routes';

import VtbHeader from '../../common/VtbHeader';

const styles = () => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
  },
});

const MainLayout = ({ classes }) => {
  return (
    <div className={classes.root}>
      <VtbHeader />
      <Route render={props => <Routes {...props} />} />
    </div>
  );
};

MainLayout.displayName = 'AuthLayout';

MainLayout.propTypes = {
  classes: PropTypes.object, // Material UI Injected;
  history: PropTypes.object, // React Router Injected;
};

export default withStyles(styles)(MainLayout);
