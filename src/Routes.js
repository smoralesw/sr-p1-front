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
        <Route path="/search" element={<SearchPlace />} />
        <Route path="/getApiToken/:refresh" element={<GetApiToken />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/AboutUs" element={<AboutSmart />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}
