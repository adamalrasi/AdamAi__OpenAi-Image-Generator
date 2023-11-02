import * as React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/create-post">
          <img src="../images/adam-logo.jpg" className="w-28 object-contain" />
        </Link>
        <a
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2
          rounded-md"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/adamalrasi/"
        >
          Linkedin/adamalrasi
        </a>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
