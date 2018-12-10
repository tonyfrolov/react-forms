import React from 'react';
import get from 'lodash.get';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import SelectionControls from '../../components/SelectionControls/SelectionControls';
import styles, { Container } from './style';
import { APP_AUTH } from '../../api/Constants';

class ImplementorPage extends React.Component {
  state = {
    users: [],
    task: get(this, 'props.location.state.task'),
  };

  componentDidMount() {
    fetch('http://127.0.0.1:9988/process-api/identity/users', { headers: APP_AUTH.getAuthHeader() })
      .then(res => res.json())
      .then(res => res.data)
      .then(json => this.setState({ users: json, loading: false }));
  }

  handleAssignImplementor() {
    const {
      task: { id },
    } = this.state;
    const { history } = this.props;
    fetch(`http://127.0.0.1:9988/process-api/runtime/tasks/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...APP_AUTH.getAuthHeader() },
      body: JSON.stringify({ action: 'complete' }),
    }).then(() => history.push('/account'));
  }

  render() {
    const { classes } = this.props;
    const { users, task } = this.state;

    return (
      <Container>
        <form className={classes.container}>
          <Typography variant="display1" gutterBottom className={classes.heading}>
            {task.name}
          </Typography>
          <SelectionControls users={users} task={task} />
          <Button
            onClick={this.handleAssignImplementor.bind(this)}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Выбрать
          </Button>
        </form>
      </Container>
    );
  }
}

ImplementorPage.propTypes = {
  location: PropTypes.object, // react router
  classes: PropTypes.object, // Material UI Injecte
};

export default withStyles(styles)(ImplementorPage);
