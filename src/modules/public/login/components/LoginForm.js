import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormHeading from './FormHeading';

const styles = theme => ({
  container: {
    backgroundColor: '#fff',
    padding: `${theme.margin * 1.5}px ${theme.margin}px`,
    width: 450,
    borderRadius: 6,
    margin: '0 auto',
  },
  button: {
    borderColor: theme.palette.primary.main,
    marginTop: theme.margin,
  },
  buttonDisabled: {
    border: 'none',
  },
  forgotContainer: {
    textAlign: 'center',
    marginTop: theme.margin * 2,
  },
  input: {
    marginBottom: '25px',
  },
  inputLabel: {
    fontSize: '18px',
    marginBottom: '5px',
  },
});

const LoginForm = ({ value, isLoading, onChange, onSubmit, classes }) => {
  const isFormEnabled = Object.values(value).every(item => item !== '');
  return (
    <form className={classes.container} onSubmit={onSubmit}>
      <FormHeading />
      <InputLabel shrink htmlFor="username" className={classes.inputLabel}>
        Имя пользователя
      </InputLabel>
      <InputBase
        className={classes.input}
        label="Username"
        id="username"
        value={value.username}
        name="username"
        onChange={onChange}
        fullWidth
        autoFocus
        autoComplete="off"
      />
      <InputLabel shrink htmlFor="password" className={classes.inputLabel}>
        Пароль
      </InputLabel>
      <InputBase
        className={classes.input}
        label="Password"
        id="password"
        value={value.password}
        name="password"
        onChange={onChange}
        margin="normal"
        fullWidth
        type="password"
      />
      <Button
        onClick={onSubmit}
        variant="contained"
        color="primary"
        fullWidth
        className={!isFormEnabled ? `${classes.buttonDisabled} ${classes.button}` : classes.button}
        disabled={!isFormEnabled}
        type="submit"
      >
        {isLoading ? <CircularProgress size={20} /> : 'Войти'}
      </Button>
      {/* <p className={classes.forgotContainer}>
        <Link to="/" >Forgot Password?</Link>
      </p> */}
    </form>
  );
};

LoginForm.propTypes = {
  value: PropTypes.object,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  classes: PropTypes.object, // Material UI Injected
};

export default withStyles(styles)(LoginForm);
