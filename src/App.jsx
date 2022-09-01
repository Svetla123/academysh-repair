import React, { Component } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";

function App() {
    return (
        <div className="App">
            <Routes>
                {/* {getRoutes(routes)} */}
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                {/* <Route path="/register" element={<RegisterPage />} /> */}
            </Routes>
        </div>
    );
}

export default App;
//   <Routes>
//       {/* <Route exact path="/" element={<Feed />} /> */}
//       <Route path="/video/:id" element={<VideoDetail />} />
//       <Route path="/channel/:id" element={<ChannelDetail />} />
//       <Route path="/search/:searchTerm" element={<SearchFeed />} />
//   </Routes>;
