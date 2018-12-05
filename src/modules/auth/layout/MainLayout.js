import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Common Components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// Routes
import styled from 'styled-components';
import Routes from './Routes';

import VtbHeader from '../../common/VtbHeader';

const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 15px;
`;

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
      <ListContainer>
        <Typography color="primary" variant="h4" gutterBottom>
          Мои задачи
        </Typography>
      </ListContainer>
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
