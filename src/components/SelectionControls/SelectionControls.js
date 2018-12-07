import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import Radio from '@material-ui/core/Radio';
import UserCard from '../Cards/UserCard';
import styles from './style';

class SelectionControls extends React.Component {
  state = {
    selectedValue: '',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  renderItems = () => {
    const { users, classes } = this.props;
    const { selectedValue } = this.state;

    return users.map(({ userName, appointment, id }) => (
      <label key={id}>
        <MenuItem className={classes.menuItem} value="Вася">
          <Radio
            checked={selectedValue === id}
            onChange={this.handleChange}
            value={id}
            name="radio-button-demo"
            aria-label="A"
          />
          <UserCard id={id} userName={userName} appointment={appointment} />
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
