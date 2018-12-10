import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TaskList from '../../components/TaskList';
import styles, { ListContainer } from './style';

const AccountPage = ({
  classes,
  addToNavBar,
}) => {
  return (
    <div className={classes.root}>
      <ListContainer>
        <Typography variant="display1" gutterBottom className={classes.heading}>
          Мои задачи
        </Typography>
        <TaskList
        addToNavBar={addToNavBar}
        />
      </ListContainer>
    </div>
  );
};

AccountPage.displayName = 'AccountPage';

AccountPage.propTypes = {
  classes: PropTypes.object, // Material UI Injected;
  history: PropTypes.object, // React Router Injected;
};

export default withStyles(styles)(AccountPage);
