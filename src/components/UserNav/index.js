import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { APP_TOKEN } from '../../api/Constants';

const Container = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.5s;
  padding: 10px;
`;

const AvatarLink = styled.a`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  border: 2px solid #002882;
  border-radius: 50%;
  background-color: #eee;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    color: #002882;
  }
`;

const UserName = styled.span`
  display: inline-block;
`;

const UserNav = props => {
  const { fullName } = props;
  return (
    <Container>
      <AvatarLink onClick={() => APP_TOKEN.remove()} href="#" title="avatar">
        {/* <img src="#" alt="avatar" /> */}В
      </AvatarLink>
      <UserName>{fullName}</UserName>
      {/*<Logout />*/}
    </Container>
  );
};

UserNav.propTypes = {
  fullName: PropTypes.string,
};

export default UserNav;
