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

  render() {
    const {
      classes,
      // users
    } = this.props;
    // рендерить список элементов меню из массива users

    const { selectedValue } = this.state;

    return (
      <div className={classes.root}>
        <legend>Выберите исполнителя, который будет обрабатывать запрос.</legend>
        <FormControl className={classes.formControl}>
          <label>
            <MenuItem className={classes.menuItem} value="Вася">
              <Radio
                checked={selectedValue === 'a'}
                onChange={this.handleChange}
                value="a"
                name="radio-button-demo"
                aria-label="A"
              />
              <UserCard userName="Вася Васильевич Васильев" appointment="Директор" />
            </MenuItem>
          </label>
          <label>
            <MenuItem className={classes.menuItem} value="Петя">
              <Radio
                checked={selectedValue === 'b'}
                onChange={this.handleChange}
                value="b"
                name="radio-button-demo"
                aria-label="B"
              />
              <UserCard userName="Петя Петрович Петров" appointment="Менеджер" />
            </MenuItem>
          </label>
          <label>
            <MenuItem className={classes.menuItem} value="Сережка">
              <Radio
                checked={selectedValue === 'c'}
                onChange={this.handleChange}
                value="c"
                name="radio-button-demo"
                aria-label="C"
              />
              <UserCard userName="Сережка Сергеевич Сержов" appointment="Дизайнер" />
            </MenuItem>
          </label>
        </FormControl>
      </div>
    );
  }
}

SelectionControls.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectionControls);
