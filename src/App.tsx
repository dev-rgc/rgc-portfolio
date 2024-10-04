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
      <div className="container min-h-screen p-3 flex flex-col">
        <Header />

        <main className="my-auto text-[#adb5bd] p-2">
          <Routes>
            <Route path="/rgc-portfolio" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
