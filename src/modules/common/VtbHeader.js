import React from 'react';
import styled from 'styled-components';

import UserNav from '../UserNav';
import logo from '../../static/images/logo-vtb.svg';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: #fff;
  border-bottom: 1px solid #002884;
`;

const UserNavContainer = styled.div`
margin-left auto;
`;

const VtbHeader = () => {
  return (
    <Header>
      <a style={{ display: 'block' }} href="/" title="ВТБ лого">
        <img src={logo} alt="vtb-logo" width="85" />
      </a>

      <UserNavContainer>
        <UserNav />
      </UserNavContainer>
    </Header>
  );
};

export default VtbHeader;
