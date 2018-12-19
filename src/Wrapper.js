import React from 'react';
import styled from 'styled-components';

import Routes from './Routes';
import VtbHeader from './components/VtbHeader';
import { APP_AUTH } from './api/Constants';
import NavBar from './components/NavBar';

const Wrapper = styled.div`
  height: 100vh;
`;

export default () => (
  <Wrapper>
    {APP_AUTH.notEmpty ? (
      <div>
        <VtbHeader userId={APP_AUTH.get().user} />
        <NavBar />
      </div>
    ) : null}
    <Routes />
  </Wrapper>
);
