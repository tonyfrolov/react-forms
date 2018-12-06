import React from 'react';
import styled from 'styled-components';

import Routes from './Routes';
import VtbHeader from './components/VtbHeader';

const Wrapper = styled.div`
  height: 100vh;
`;

export default () => (
  <Wrapper>
    <VtbHeader />
    <Routes />
  </Wrapper>
);
