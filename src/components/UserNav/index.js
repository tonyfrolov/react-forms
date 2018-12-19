import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../../static/images/logo-vtb.svg';

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

const UserPicture = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 2px solid #002882
  background-size: 100% 100%;
`;

const UserNav = props => {
  const { fullName, pictureUrl } = props;
  const divStyle = {
    backgroundImage: 'url(' + pictureUrl + ')',
  };
  return (
    <Container>
      <AvatarLink href="#" title="avatar">
        {pictureUrl ? <UserPicture style={divStyle} /> : 'В'}
      </AvatarLink>
      <UserName>{fullName}</UserName>
    </Container>
  );
};

UserNav.propTypes = {
  fullName: PropTypes.string,
};

export default UserNav;
