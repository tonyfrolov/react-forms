import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import axios from 'axios';
// import { connect } from 'react-redux';

const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
`;

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 300,
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
});

const renderListItem = (item, id) => (
  <ListItem style={{borderBottom: '1px solid #eee'}} key={id} button to="/implementor" component={Link}>
    <ListItemText primary={item} />
  </ListItem>
);

class TaskList extends React.Component {
  state = { taskItems: [], loading: true };

  componentDidMount() {
    fetch('/jsonDatas/tasks.json')
      .then(res => res.json())
      .then(json => this.setState({ taskItems: json, loading: false }));
  }

  render() {
    const { classes } = this.props;
    const { taskItems, loading } = this.state;

    if (loading) return <div>Loading...</div>;

    const tasksCompleted = taskItems.filter(({ completed }) => completed);
    const tasksIncompleted = taskItems.filter(({ completed }) => !completed);

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
          {tasksIncompleted.map(({ item, id }) => renderListItem(item, id))}
        </List>

        <List
          subheader={
            <ListSubheader className={classes.subheader} component="div">
              Исполняются
            </ListSubheader>
          }
          className={classes.root}
        >
        </List>

        <List
          subheader={
            <ListSubheader className={classes.subheader} component="div">
              Завершенные
            </ListSubheader>
          }
          className={classes.root}
        >
          {tasksCompleted.map(({ item, id }) => renderListItem(item, id))}
        </List>

        <List
          subheader={
            <ListSubheader className={classes.subheader} component="div">
              Отложенные
            </ListSubheader>
          }
          className={classes.root}
        >
        </List>
      </ListContainer>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskList);
