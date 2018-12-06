import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarLink = styled.a`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border: 2px solid #002884;
  border-radius: 50%;
  background-color: #eee;
`;

const UserName = styled.span`
  display: inline-block;
`;

class UserNav extends React.Component {
  render() {
    const { fullName } = this.props;
    return (
      <Container>
        <AvatarLink href="#" title="avatar">
          {/* <img src="#" alt="avatar" /> */}
        </AvatarLink>
        <UserName>{fullName} Васильев Василий Васильевич</UserName>
      </Container>
    );
  }
}

UserNav.propTypes = {
  fullName: PropTypes.string,
};

export default UserNav;
