import React from 'react';
import { GlobalStyle } from './styles/globaStyles';
import Landing from './pages/Landing/'

import Routes from './routes'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes/>
    </div>
  );
}

export default App;
