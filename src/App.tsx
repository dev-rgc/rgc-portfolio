import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <div className="container grid grid-cols-5  auto-rows-auto h-screen p-0 ">
        <div className="leftPane  grid grid-rows-3 bg-gray-900">
          <div className=" grid justify-items-center content-center text-white shadow-lg">
            <Profile />
            <p>Web Developer</p>
          </div>
          <div className="row-span-2 grid justify-items-center content-center ">
            <div className="flex flex-col gap-4 text-white text-sm">
              <p>GitHub: github.com/riogarrell</p>
              <p>LinkedIn: linkedin.com/in/riogarrell</p>
              <p>Gmail: riogarrell@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="rightPane col-span-4 grid grid-col-3  ">
          <Header />
          <main className="appMain container ">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
