import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import Radio from '@material-ui/core/Radio';
import UserCard from '../Cards/UserCard';
import styles from './style';
import { APP_AUTH } from '../../api/Constants';

export const getVariable = (processInstanceId, variableName) =>
  fetch(
    `http://127.0.0.1:9988/process-api/runtime/process-instances/${processInstanceId}/variables/${variableName}`,
    {
      headers: {
        'Content-Type': 'application/json',
        ...APP_AUTH.getAuthHeader(),
      },
    },
  );

export const updateVariable = (method, processInstanceId, variableName, value) =>
  fetch(
    `http://127.0.0.1:9988/process-api/runtime/process-instances/${processInstanceId}/variables`,
    {
      method,
      headers: { 'Content-Type': 'application/json', ...APP_AUTH.getAuthHeader() },
      body: JSON.stringify([{ name: variableName, value }]),
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
      .then(() => getVariable(processInstanceId, 'worker'))
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
      .then(() => getVariable(processInstanceId,'worker'))
      .then(resp => resp.json())
      .then(({ value }) => updateVariable(value ? 'PUT' : 'POST', processInstanceId, 'worker', selectedValue))
      .then(() => this.setState({ selectedValue }));
  };

  renderItems = () => {
    const { users, classes } = this.props;
    const { selectedValue } = this.state;

    return users.map(({ firstName, lastName, pictureUrl, appointment, id }) => (
      <label key={id}>
        <MenuItem className={classes.menuItem} value="Вася">
          <Radio
            checked={selectedValue === id}
            onChange={this.handleChange}
            value={id}
            name="radio-button-demo"
            aria-label="A"
          />
          <UserCard id={id} userName={`${firstName} ${lastName}`} pictureUrl={pictureUrl} />
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
