import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import NotFound from "./pages/Error/NotFound";
import Home from "./pages/Home/index";
import AppContextProviders from "./pages/Contexts/AppContexts";

function App() {
  return (
    <div className="App">
      <AppContextProviders>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContextProviders>
    </div>
  );
}

export default App;