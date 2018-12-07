import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import Radio from '@material-ui/core/Radio';
import UserCard from './Cards/UserCard';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  menuItem: {
    display: 'flex',
    height: '40px',
    width: '350px',
  },
});

class SelectionControls extends React.Component {
  state = {
    selectedValue: 'a',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  renderItems = () => {
    const { users, classes } = this.props;
    const { selectedValue } = this.state;

    return users.map(({ userName, appointment, id }) => (
      <label>
        <MenuItem className={classes.menuItem} value="Вася">
          <Radio
            checked={selectedValue === 'a'}
            onChange={this.handleChange}
            value="a"
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
