import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import Titulos from "./pages/Titulos";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:title_id" element={<Titulos />} />
        <Route path="/posts/new" element={<NewPost />} />
      </Routes>
    </Router>
  );
}
