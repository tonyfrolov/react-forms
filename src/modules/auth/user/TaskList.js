import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarBorder from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class TaskList extends React.Component {
  state = { taskItems: [] };

  componentDidMount() {
    fetch('/jsonDatas/tasks.json')
      .then(res => res.json())
      .then(json => this.setState({ taskItems: json }));
  }

  render() {
    const { classes } = this.props;
    const { taskItems } = this.state;

    return (
      <List subheader={<ListSubheader component="div">ВТБ</ListSubheader>} className={classes.root}>
        {taskItems.map(({ item, id }) => (
          <ListItem key={id} button to="/implementor" component={Link}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary={item} />
          </ListItem>
        ))}
      </List>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskList);
