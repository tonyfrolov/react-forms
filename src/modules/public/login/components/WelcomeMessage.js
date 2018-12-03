import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import '../../../../styles/modules/logo.scss';

const styles = theme => ({
  heading: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: theme.margin * 2,
  },
  logo: {
    width: 250,
    heading: 250,
    objectFit: 'cover',
  },
});

const WelcomeMessage = ({ classes }) => {
  return (
    <Fragment>
      <div style={{ display: 'inline-block', width: '120px', height: '80px' }}>
        <svg>
          <path
            className="cls-1"
            d="M46.83,24.22H24.62l1.6-4.4H48.43Zm-.8,2.2H23.81l-1.6,4.4H44.42ZM43.63,33H21.41l-1.6,4.4H42Z"
            transform="translate(-19.81 -19.81)"
          />
          <path
            className="cls-2"
            d="M99.75,48.41h4a3.49,3.49,0,0,0,3.06-1.19,3.82,3.82,0,0,0,.78-2.51,3.48,3.48,0,0,0-1.37-3,4,4,0,0,0-2.51-.64H99.75ZM94.5,52.84V26.42h17.19l-1.51,4.43H99.75V36.7H104c3.43,0,5.21.82,6.44,1.87a7.78,7.78,0,0,1,2.61,6.26,7.59,7.59,0,0,1-3.11,6.54c-1.65,1.14-3.38,1.46-6.9,1.46Zm-15.22,0v-22H71.64V26.42H92.85l-1.51,4.43H84.58v22ZM58.11,37h3a6.37,6.37,0,0,0,1.83-.14,2.89,2.89,0,0,0,2-3,2.67,2.67,0,0,0-2-2.93,7.28,7.28,0,0,0-2-.18H58.11Zm0,4.57V48.5h3.66a3.93,3.93,0,0,0,2.83-.78A3.45,3.45,0,0,0,65.7,45,3.76,3.76,0,0,0,65,42.74c-.78-1-1.74-1.19-3.38-1.19Zm8.46-2.79v.09a9.27,9.27,0,0,1,2.47,1.42,6.23,6.23,0,0,1,2.24,5.17c0,3.61-1.92,6.22-5.07,7a13.47,13.47,0,0,1-3.84.37H52.86V26.42h8.46a15.64,15.64,0,0,1,4,.37c3.06.82,5.07,2.93,5.07,6.26a5.85,5.85,0,0,1-1.69,4.3A6.41,6.41,0,0,1,66.62,38.76Z"
            transform="translate(-19.81 -19.81)"
          />
        </svg>
      </div>
      <Typography variant="display1" gutterBottom className={classes.heading}>
        ВТБ форма
      </Typography>

    </Fragment>
  );
};

WelcomeMessage.propTypes = {
  classes: PropTypes.object, // Material UI Injected
};

export default withStyles(styles)(WelcomeMessage);
