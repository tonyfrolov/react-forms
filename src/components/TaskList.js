import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MiniCard from './Cards/MiniCard';
import Loader from './PageLoader';
import { APP_AUTH } from '../api/Constants';

// import axios from 'axios';
// import { connect } from 'react-redux';

const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  width: 100vw;
`;

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 600,
    boxShadow: '0 2px 2px #bbb',
    borderRadius: '8px',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  subheader: {
    borderRadius: '8px',
    borderBottomRightRadius: '0px',
    borderBottomLeftRadius: '0px',
    backgroundColor: '#dfe3e6',
    textAlign: 'center',
    color: '#002884',
    fontWeight: 'bold',
  },
  listItem: {
    height: '100px',
  },
});

const renderListItem = (task, id, classes) => (
  <ListItem
    className={classes.listItem}
    key={id}
    button
    to={{
      pathname: task.taskDefinitionKey === 'assignWorker' ? 'implementor' : 'approval',
      state: { task },
    }}
    component={Link}
  >
    <MiniCard task={task} />
  </ListItem>
);

class TaskList extends React.Component {
  state = { taskItems: [], completedTaskItems: [], loading: true };

  componentDidMount() {
    // fetch('http://127.0.0.1:9988/process-api/runtime/tasks', { headers: APP_AUTH.getAuthHeader() })
    //   .then(res => res.json())
    //   .then(res => res.data)
    //   .then(json => this.setState({ taskItems: json, loading: false }));

    fetch('http://127.0.0.1:9988/process-api/query/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...APP_AUTH.getAuthHeader() },
      body:  JSON.stringify({candidateOrAssigned: APP_AUTH.get().user}) ,
    })
      .then(res => res.json())
      .then(res => res.data)
      .then(json => this.setState({ taskItems: json, loading: false }));

    fetch('http://127.0.0.1:9988/process-api/history/historic-task-instances?finished=true', {
      headers: APP_AUTH.getAuthHeader(),
    })
      .then(res => res.json())
      .then(res => res.data)
      .then(json => this.setState({ completedTaskItems: json, loading: false }));
  }

  render() {
    const { classes } = this.props;
    const { taskItems, completedTaskItems, loading } = this.state;

    if (loading) return <Loader />;

    return (
      <ListContainer>
        <List
          subheader={
            <ListSubheader className={classes.subheader} component="div">
              Новые задачи
            </ListSubheader>
          }
          className={classes.root}
        >
          {taskItems.map((task, id) => renderListItem(task, id, classes))}
        </List>
        <List
          subheader={
            <ListSubheader className={classes.subheader} component="div">
              Завершенные
            </ListSubheader>
          }
          className={classes.root}
        >
          {completedTaskItems.map((task, id) => renderListItem(task, id, classes))}
        </List>
      </ListContainer>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskList);
