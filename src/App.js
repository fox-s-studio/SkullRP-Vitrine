import React from 'react';
import Header from './Component/header';
import Logo from './img/logo.png';
import Helmet from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>[FR] Skull RP</title>
        <link rel="shortcut icon" href={Logo} />
      </Helmet>
      <Header logo={Logo} />
    </div>
  );
}

export default App;
