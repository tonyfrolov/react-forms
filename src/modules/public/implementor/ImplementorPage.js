import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
// import TextField from '@material-ui/core/TextField/TextField';
// import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ccc;
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
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <Container>
        <Button>Implementor Page</Button>
        <form className={classes.container}>
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
