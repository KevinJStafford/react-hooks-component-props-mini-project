import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div>
     <Header name={blogData.name} />
     <About image={blogData.image} about={blogData.about} />
   </div>
  );
}

export default App;
