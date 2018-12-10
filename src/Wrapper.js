import React from 'react';
import styled from 'styled-components';

import Routes from './Routes';
import VtbHeader from './components/VtbHeader';
import { APP_AUTH } from './api/Constants';

const Wrapper = styled.div`
  height: 100vh;
`;

export default () => (
  <Wrapper>
    <VtbHeader userId={APP_AUTH.get().user} />
    <Routes />
  </Wrapper>
);
