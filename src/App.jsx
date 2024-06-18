import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import About from "./components/About";
import Contact from "./components/Contact";
import PostDetails from "./components/PostDetails";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/posts/:id" element={<PostDetails />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
