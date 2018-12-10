import React from 'react';
import styled from 'styled-components';

import Routes from './Routes';
import VtbHeader from './components/VtbHeader';
import NavBar from './components/NavBar';
import { APP_TOKEN } from './api/Constants';

const Wrap = styled.div`
  height: 100vh;
`;

class Wrapper extends React.Component {
  state = {
    nav: [['/account', 'Account']],
  };

  addToNavBar = (path, displayName) => {
    const { nav } = this.state;
    this.setState({ nav: [...nav, [path, displayName]] });
  };

  rollBackNavBar = destination => {
    const { nav } = this.state;
    this.setState({ nav: nav.slice(0, destination + 1) });
  };

  render() {
    const { nav } = this.state;
    return (
      <Wrap>
        {APP_TOKEN.notEmpty ? (
          <div>
            <VtbHeader />
            <NavBar nav={nav} rollBackNavBar={this.rollBackNavBar} />
          </div>
        ) : null}
        <Routes rollBackNavBar={this.rollBackNavBar} addToNavBar={this.addToNavBar} />
      </Wrap>
    );
  }
}
export default Wrapper;
