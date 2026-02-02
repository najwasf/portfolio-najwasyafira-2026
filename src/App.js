import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portfolio from "./portfolio";
import ProjectDetail from "./ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
