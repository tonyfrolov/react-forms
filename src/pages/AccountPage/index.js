import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TaskList from '../../components/TaskList';
import styles, { ListContainer } from './style';

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
