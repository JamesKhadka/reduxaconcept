import './App.css';
import React from 'react';

import Navebar from './component/Navebar';
import Shop from './component/Shop';

function App() {
  return (
    <>
      <Navebar />
      <div className="container">
        <Shop />
      </div>
    </>
  );
}

export default App;
