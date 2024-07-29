import React from 'react';
import NavBar from '/NavBar';
import Gallery from '/Gallery';
import styled from 'styled-components';

const App = () => {
  return (
    <AppContainer>
      <NavBar />
      <Gallery />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

export default App;
