import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  state = {
    implementor: '',
    name: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes, users } = this.props;
    // рендерить список элементов меню из массива users
    const { implementor } = this.state;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <Select
            value={implementor}
            onChange={this.handleChange}
            inputProps={{
              name: 'implementor',
              id: 'implementor',
            }}
          >
            <MenuItem value="">
              <em>Не выбран</em>
            </MenuItem>
            <MenuItem value="Вася">Вася</MenuItem>
            <MenuItem value="Петя">Петя</MenuItem>
            <MenuItem value="Сережка">Сережка</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
