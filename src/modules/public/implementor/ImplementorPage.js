import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import SingleSelect from './SingleSelect';
// import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e9ecef;
`;

const styles = theme => ({
  container: {
    backgroundColor: '#fff',
    padding: `${theme.margin * 1.5}px ${theme.margin}px`,
    width: 450,
    borderRadius: 6,
    margin: '0 auto',
  },
  wrapper: {
    marginTop: 85,
  },
  logo: {
    paddingBottom: 20,
    height: 100,
  },
  sadFaceIcon: {
    maxHeight: 400,
    marginTop: theme.margin,
  },
  button: {
    color: '#fff',
    marginTop: theme.margin * 2,
    marginBottom: theme.margin,
  },
});

class ImplementorPage extends React.Component {
  state = { users: [] };

  componentDidMount() {}

  render() {
    const { classes } = this.props;
    const { users } = this.state;

    return (
      <Container>
        <Typography component="h4" variant="h4">
          Implementor Page
        </Typography>
        <form className={classes.container}>
          <SingleSelect users={users} />
          <Button
            component={Link}
            to="/approval"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Go next
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
