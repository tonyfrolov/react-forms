import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/es/Typography';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import InputBase from '@material-ui/core/InputBase/InputBase';
import get from 'lodash.get';
import UserCard from '../../components/Cards/UserCard';
import Loader from '../../components/PageLoader';
import Lorem from '../../components/Lorem';
import DndAssigment from '../../components/DndAssigment';

import styles, { Container } from './style';
import { APP_AUTH } from '../../api/Constants';

class ApprovalPage extends React.Component {
  state = {
    users: [],
    task: get(this, 'props.location.state.task'),
  };

  componentDidMount() {
    fetch('http://127.0.0.1:9988/process-api/identity/users', { headers: APP_AUTH.getAuthHeader() })
      .then(res => res.json())
      .then(res => res.data)
      .then(json => this.setState({ users: json, loading: false }));
  }

  renderList = () => {
    const { users } = this.state;
    return (
      <div>
        <legend style={{ marginBottom: '10px' }}>Выберите согласующего для решения:</legend>
        {users && users.length > 0 && <DndAssigment users={users} />}
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    const { task, loading } = this.state;

    if (loading) return <Loader />;

    return (
      <Container>
        <form className={classes.container}>
          <Typography variant="display1" gutterBottom className={classes.heading}>
            {task.name}
          </Typography>
          <FormControl className={classes.formControls}>
            {/*<Typography variant="h6" gutterBottom style={{ borderBottom: '1px solid #002882' }}>*/}
              {/*Запрос на кредит*/}
              {/*/!* Получаем значение выбранной задачи из redux state *!/*/}
            {/*</Typography>*/}
            {/*<p style={{ marginBottom: '20px' }}>*/}
              {/*<Lorem amount={5} />*/}
            {/*</p>*/}
            <label style={{ marginBottom: '20px' }}>
              Решение:
              <InputBase
                className={classes.input}
                label="lololololo"
                multiline
                rows={3}
                name="username"
                fullWidth
                autoFocus
                autoComplete="off"
              />
            </label>
          </FormControl>
          <FormControl>{this.renderList()}</FormControl>
          <FormControl style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Button
              style={{ width: '50%' }}
              component={Link}
              to="/account"
              variant="contained"
              color="primary"
            >
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