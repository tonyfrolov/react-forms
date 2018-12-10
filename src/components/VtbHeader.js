import React from 'react';
import styled from 'styled-components';

import ExitToApp from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import UserNav from './UserNav';
import logo from '../static/images/logo-vtb.svg';
import { APP_AUTH } from '../api/Constants';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 12vh;
  padding-left: 25px;
  padding-right: 25px;
  background-color: #fff;
  border-bottom: 1px solid #002884;
`;

const UserNavContainer = styled.div`
margin-left auto;
`;

class VtbHeader extends React.Component {
  state = {
    userProfile: {},
  };

  fetchData(userId) {
    fetch(`http://127.0.0.1:9988/process-api/identity/users/${userId}`, {
      headers: APP_AUTH.getAuthHeader(),
    })
      .then(res => res.json())
      .then(json => this.setState({ userProfile: json, loading: false }));
  }

  componentDidMount() {
    const { userId } = this.props;
    console.log('user', userId);
    this.fetchData(userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      this.fetchData(this.props.userId);
    }
  }

  handleLogout() {
    APP_AUTH.remove();
    this.setState({ userProfile: {} });
    window.location.href = '/login';
  }

  render() {
    const {
      userProfile: { firstName, lastName },
    } = this.state;
    return APP_AUTH.notEmpty ? (
      <Header>
        <a style={{ display: 'block' }} href="/" title="ВТБ лого">
          <img src={logo} alt="vtb-logo" width="85" />
        </a>

        <UserNavContainer>
          <UserNav fullName={`${firstName} ${lastName}`} />
        </UserNavContainer>

        <IconButton onClick={this.handleLogout.bind(this)}>
          <ExitToApp color="primary" />
        </IconButton>
      </Header>
    ) : null;
  }
}

export default VtbHeader;
