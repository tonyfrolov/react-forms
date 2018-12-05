import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

// Material UI
import Snackbar from '@material-ui/core/Snackbar';

// API
import { APP_TOKEN } from '../../../api/Constants';
// Components
import LoginForm from './components/LoginForm';
import logo from '../../../static/images/logo-vtb.svg';

const FormContainer = styled.section`
  height: 100vh;
  background-color: #e9ecef;
`;

const Header = styled.div`
  display: flex;
  width: 100vw;
  height: 100px;
  margin-bottom: 125px;
  padding-left: 25px;
  background-color: #fff;
`;

class LoginPage extends Component {
  isTokenSource = axios.CancelToken.source();

  state = {
    form: {
      username: '',
      password: '',
    },
    isLoading: false,
    isSnackbarOpen: false,
    snackbarMessage: '',
  };

  componentWillUnmount() {
    this.isTokenSource.cancel('API Cancel');
  }

  onHandleChangeForm = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  onHandleSubmitForm = async event => {
    event.preventDefault();

    const { history } = this.props;
    const { form } = this.state;

    const isFormEmpty = Object.values(form).every(item => item === '');
    if (isFormEmpty) {
      return;
    }
    try {
      this.setState({ isLoading: true });
      // const result = await AuthenticationAPI.onLogin({
      //   cancelToken: this.isTokenSource.token,
      //   username: form.username,
      //   password: form.password,
      // });
      this.setState({ isLoading: false });
      APP_TOKEN.set({
        token: '',
        refreshToken: '',
      });
      history.push('/auth');
    } catch (error) {
      if (axios.isCancel(error)) {
        // console.log('Request canceled', error.message);
      } else {
        const { message, errorCode } = error.response.data;
        if (errorCode === '401') {
          this.onToggleSnackbar({ message });
        }
        this.setState({ isLoading: false });
      }
    }
  };

  onToggleSnackbar = ({ message = 'Error' }) => {
    this.setState(state => ({
      isSnackbarOpen: !state.isSnackbarOpen,
      snackbarMessage: message,
    }));
  };

  render() {
    const { form, isLoading, isSnackbarOpen, snackbarMessage } = this.state;
    return (
      <FormContainer>
        <Header>
          <img src={logo} alt="logo" width="90" />
        </Header>
        <LoginForm
          value={form}
          isLoading={isLoading}
          onChange={this.onHandleChangeForm}
          onSubmit={this.onHandleSubmitForm}
        />

        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={isSnackbarOpen}
          autoHideDuration={6000}
          onClose={this.onToggleSnackbar}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{snackbarMessage}</span>}
        />
      </FormContainer>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.object, // React Router Injected
};

export default LoginPage;
