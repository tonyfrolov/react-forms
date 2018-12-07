import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import SelectionControls from '../../components/SelectionControls/SelectionControls';
import styles, { Container } from './style';

class ImplementorPage extends React.Component {
  state = { users: [] };

  componentDidMount() {
    fetch('/jsonDatas/users.json')
      .then(res => res.json())
      .then(json => this.setState({ users: json }));
  }

  render() {
    const { classes } = this.props;
    const { users } = this.state;

    return (
      <Container>
        <form className={classes.container}>
          <Typography variant="display1" gutterBottom className={classes.heading}>
            ООО "Ромашка" - Заявка на кредит
          </Typography>
          <SelectionControls users={users} />
          <Button
            component={Link}
            to="/account"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Выбрать
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
