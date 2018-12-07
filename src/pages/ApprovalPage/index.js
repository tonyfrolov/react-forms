import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/es/Typography';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
// import Radio from '@material-ui/core/Radio/Radio';
import InputBase from '@material-ui/core/InputBase/InputBase';
import UserCard from '../../components/Cards/UserCard';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const Legend = styled.legend`margin`;

const styles = theme => ({
  container: {
    backgroundColor: '#fff',
    padding: `${theme.margin * 1.5}px ${theme.margin}px`,
    width: '70vw',
    height: '88vh',
    borderRadius: 6,
    margin: '0 auto',
  },

  formControls: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    color: '#002882',
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottom: '1px solid #002882',
    marginBottom: '25px',
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
          <Typography variant="display1" gutterBottom className={classes.heading}>
            ООО "Ромашка" - Подготовка решения по запросу на кредит
            {/* Получаем значение выбранной задачи из redux state */}
          </Typography>
          <FormControl className={classes.formControls}>
            <Typography variant="h6" gutterBottom style={{ borderBottom: '1px solid #002882' }}>
              Запрос на кредит
              {/* Получаем значение выбранной задачи из redux state */}
            </Typography>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque debitis
              deleniti dolorum earum nam officiis sequi. Architecto, aspernatur consequuntur
              corporis dolorum ea, expedita hic ipsam laudantium libero magnam molestiae neque nihil
              perspiciatis quaerat quam quas, ratione reiciendis sapiente sequi similique suscipit
              temporibus tenetur unde voluptate voluptatum? Amet aperiam architecto beatae
              consequuntur culpa dolorem ducimus eos esse expedita harum hic impedit necessitatibus
              obcaecati odit officiis, perferendis placeat praesentium quae quaerat quasi quo
              repellat reprehenderit sequi similique soluta suscipit, velit veniam veritatis vero
              voluptatum. Dolor ipsam nobis perspiciatis quas quo, voluptates.
            </p>
            <label>
              Решение:
              <InputBase
                className={classes.input}
                label="lololololo"
                multiline
                rows={3}
                name="username"
                // onChange={onChange}
                fullWidth
                autoFocus
                autoComplete="off"
              />
            </label>
            <legend>Выберите исполнителя для обработки запроса</legend>
            <label>
              <MenuItem className={classes.menuItem} value="Вася">
                <Checkbox />
                <UserCard userName="Вася Васильевич Васильев" appointment="Директор" />
              </MenuItem>
            </label>
            <label>
              <MenuItem className={classes.menuItem} value="Петя">
                <Checkbox />
                <UserCard userName="Петя Петрович Петров" appointment="Менеджер" />
              </MenuItem>
            </label>
            <label>
              <MenuItem className={classes.menuItem} value="Сережка">
                <Checkbox />
                <UserCard userName="Сережка Сергеевич Сержов" appointment="Дизайнер" />
              </MenuItem>
            </label>
          </FormControl>
          <FormControl className={classes.formControls}>
            <Button component={Link} to="/account" variant="contained" color="primary">
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
