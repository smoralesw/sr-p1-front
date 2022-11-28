import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GetApiToken from './GetApiToken';


import Home from './Home';
import SearchPlace from './SearchPlace';

export default function RoutesFunction() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:accessToken" element={<SearchPlace />} />
        {/* <Route path="/search/:accessToken/:refreshToken/:expiresIn/:tokenType" element={<SearchPlace />} /> */}
        <Route path="/getApiToken" element={<GetApiToken />} />
      </Routes>
    </div>
  );
}
