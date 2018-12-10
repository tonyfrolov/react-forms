import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import Radio from '@material-ui/core/Radio';
import UserCard from '../Cards/UserCard';
import styles from './style';
import { APP_AUTH } from '../../api/Constants';

const getVariable = processInstanceId =>
  fetch(
    `http://127.0.0.1:9988/process-api/runtime/process-instances/${processInstanceId}/variables/worker`,
    {
      headers: {
        'Content-Type': 'application/json',
        ...APP_AUTH.getAuthHeader(),
      },
    },
  );

const updateVariable = (method, processInstanceId, value) =>
  fetch(
    `http://127.0.0.1:9988/process-api/runtime/process-instances/${processInstanceId}/variables`,
    {
      method,
      headers: { 'Content-Type': 'application/json', ...APP_AUTH.getAuthHeader() },
      body: JSON.stringify([{ name: 'worker', value }]),
    },
  );

class SelectionControls extends React.Component {
  state = {
    selectedValue: '',
  };

  componentDidMount() {
    const {
      task: { processInstanceId },
    } = this.props;
    Promise.resolve()
      .then(() => getVariable(processInstanceId))
      .then(resp => resp.json())
      .then(({ value }) => this.setState({ selectedValue: value }));
  }

  handleChange = event => {
    const {
      task: { processInstanceId },
    } = this.props;

    const selectedValue = event.target.value;
    this.setState({ selectedValue: event.target.value });

    Promise.resolve()
      .then(() => getVariable(processInstanceId))
      .then(resp => resp.json())
      .then(({ value }) => updateVariable(value ? 'PUT' : 'POST', processInstanceId, selectedValue))
      .then(() => this.setState({ selectedValue }));
  };

  renderItems = () => {
    const { users, classes } = this.props;
    const { selectedValue } = this.state;

    return users.map(({ firstName, lastName, appointment, id }) => (
      <label key={id}>
        <MenuItem className={classes.menuItem} value="Вася">
          <Radio
            checked={selectedValue === id}
            onChange={this.handleChange}
            value={id}
            name="radio-button-demo"
            aria-label="A"
          />
          <UserCard id={id} userName={`${firstName} ${lastName}`} appointment={appointment} />
        </MenuItem>
      </label>
    ));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <legend>Выберите исполнителя, который будет обрабатывать запрос.</legend>
        <FormControl className={classes.formControl}>{this.renderItems()}</FormControl>
      </div>
    );
  }
}

SelectionControls.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.array,
};

export default withStyles(styles)(SelectionControls);
