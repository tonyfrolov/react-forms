import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/es/Typography';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const styles = theme => ({
  container: {
    display: 'block',
    backgroundColor: '#fff',
    padding: `${theme.margin * 1.5}px ${theme.margin}px`,
    width: 450,
    borderRadius: 6,
    margin: '0 auto',
  },
  header: {
    borderBottom: '1px solid black',
    marginBottom: '15px',
  },
  formControls: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
          <Typography className={classes.header} variant="h3">
            Название задачи
            {/* Получаем значение выбранной задачи из redux state */}
          </Typography>
          <legend>Выберите исполнителя для обработки запроса</legend>
          <FormControl className={classes.formControls}>
            <FormControlLabel control={<Checkbox />} label="Чувак 1" />
            <FormControlLabel control={<Checkbox />} label="Чувак 2" />
            <FormControlLabel control={<Checkbox />} label="Чувак 3" />
          </FormControl>
          <FormControl className={classes.formControls}>
            <Button component={Link} to="/auth" variant="contained" color="primary">
              Выбрать
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
