import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/es/Typography';
import InputBase from '@material-ui/core/InputBase/InputBase';
import Loader from '../../components/PageLoader';
import Lorem from '../../components/Lorem';

import styles, { Container } from './style';

class DecisionPreparePage extends React.Component {
  state = { guys: [], loading: true };

  componentDidMount() {
    fetch('/jsonDatas/guys.json')
      .then(res => res.json())
      .then(json => this.setState({ guys: json, loading: false }));
  }

  render() {
    const { classes,rollBackNavBar } = this.props;
    const { guys, loading } = this.state;

    if (loading) return <Loader />;

    return (
      <Container>
        <form className={classes.container}>
          <Typography variant="display1" gutterBottom className={classes.heading}>
            ООО "Ромашка" - Согласование решения по запросу на кредит
            {/* Получаем значение выбранной задачи из redux state */}
          </Typography>
          <FormControl className={classes.formControls}>
            <Typography variant="h6" gutterBottom style={{ borderBottom: '1px solid #002882' }}>
              Запрос на кредит
              {/* Получаем значение выбранной задачи из redux state */}
            </Typography>
            <p style={{ marginBottom: '20px' }}>
              <Lorem amount={5} />
            </p>
            <Typography variant="h6" gutterBottom style={{ borderBottom: '1px solid #002882' }}>
              Решение
              {/* Получаем значение выбранной задачи из redux state */}
            </Typography>
            <p style={{ marginBottom: '20px' }}>
              <Lorem amount={5} />
            </p>
            <label style={{ marginBottom: '20px' }}>
              Замечания:
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
          <FormControl
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: '100%',
            }}
          >
            <Button
              style={{ width: '30%', marginRight: '20px' }}
              component={Link}
              onClick={() => rollBackNavBar(0)}
              to="/account"
              variant="contained"
              color="primary"
            >
              Согласовано
            </Button>
            <Button
              style={{ width: '30%' }}
              component={Link}
              onClick={() => rollBackNavBar(0)}
              to="/account"
              variant="contained"
              color="primary"
            >
              Не согласовано
            </Button>
          </FormControl>
        </form>
      </Container>
    );
  }
}

DecisionPreparePage.propTypes = {
  classes: PropTypes.object, // Material UI Injecte
};

export default withStyles(styles)(DecisionPreparePage);
