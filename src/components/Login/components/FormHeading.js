import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  heading: {
    color: '#002882',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const FormHeading = ({ classes }) => {
  return (
    <Typography variant="display1" gutterBottom className={classes.heading}>
      Логин
    </Typography>
  );
};

FormHeading.propTypes = {
  classes: PropTypes.object, // Material UI Injected
};

export default withStyles(styles)(FormHeading);
