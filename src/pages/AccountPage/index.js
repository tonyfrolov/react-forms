import React from 'react';
import PropTypes from 'prop-types';
// import { Switch, Route } from 'react-router-dom';

// Common Components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// Routes
import styled from 'styled-components';
// import Routes from './Routes';

// import VtbHeader from '../../common/VtbHeader';
import TaskList from '../../components/TaskList';
// import PageLoader from '../../common/PageLoader';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

const styles = () => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    marginTop: '20px',
  },
  header: {
    marginBottom: '40px',
  },
  heading: {
    color: '#002882',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Account = ({ classes }) => {
  return (
    <div className={classes.root}>
      <ListContainer>
        <Typography variant="display1" gutterBottom className={classes.heading}>
          Мои задачи
        </Typography>
        <TaskList />
      </ListContainer>
    </div>
  );
};

Account.displayName = 'Account';

Account.propTypes = {
  classes: PropTypes.object, // Material UI Injected;
  history: PropTypes.object, // React Router Injected;
};

export default withStyles(styles)(Account);
