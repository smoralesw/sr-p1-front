import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesFunction from './Routes';


function App() {
  return (
    <div className="min-vh-100 min-vw-100 d-flex flex-column justify-content-between">
      <BrowserRouter>
        <RoutesFunction />
      </BrowserRouter>
    </div>
  );
}

export default App;
