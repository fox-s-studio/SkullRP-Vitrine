import React from 'react';
import Header from './Component/header';
import Logo from './img/logo.png';
import Head from './Component/head';

function App() {
  return (
    <div className="App">
      <Head/>
      <Header logo={Logo} />
    </div>
  );
}

export default App;
