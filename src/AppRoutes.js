import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Index } from "./Pages/Index";
import { Post } from "./Pages/Post";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  );
};
