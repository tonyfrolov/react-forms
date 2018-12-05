import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import InputBase from '@material-ui/core/es/InputBase/InputBase';
import { Link } from 'react-router-dom';

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
  buttonContainer: {
    flexDirection: 'row',
  },
});

class ApprovalPage extends React.Component {
  // state = { guys: [] };

  // componentDidMount() {
  //   fetch('/jsonDatas/guys.json')
  //     .then(res => res.json())
  //     .then(json => this.setState({ guys: json }));
  // }

  render() {
    const { classes } = this.props;
    // const { guys } = this.state;

    return (
      <Container>
        <form className={classes.container}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Выберите</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Чувак 1" />
              <FormControlLabel control={<Checkbox />} label="Чувак 2" />
              <FormControlLabel control={<Checkbox />} label="Чувак 3" />
            </FormGroup>
            <FormHelperText>Подсказка</FormHelperText>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Введите что-нибудь</FormLabel>
            <InputBase
              id="filled-multiline-static"
              label="Multiline"
              multiline
              rows="4"
              defaultValue="Default Value"
              margin="normal"
              variant="filled"
            />
          </FormControl>
          <FormControl className={classes.buttonContainer}>
            <Button variant="contained" color="primary">
              Cancel
            </Button>
            <Button component={Link} to="/auth" variant="contained" color="primary">
              Ok
            </Button>
          </FormControl>
        </form>
      </Container>
    );
  }
}

ApprovalPage.propTypes = {
  classes: PropTypes.object, // Material UI Injecte
};

export default withStyles(styles)(ApprovalPage);
