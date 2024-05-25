import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { InvisibleFriend } from "./pages/invisibleApp/InvisibleFriend";
import { Home } from "./pages/index/Home";
import { NumberAsigner } from './pages/numberAsigner/invisibleApp/NumberAsigner';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/InvisibleFriend" element={<InvisibleFriend />} />
        <Route path="/NumberAsigner" element={<NumberAsigner />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
