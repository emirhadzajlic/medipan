// import { useState, useEffect } from 'react';
import React from "react";
// import "./App.css";
// import Login from "./components/Login";
// import Login from "./components/Login"

// import Signup from "./components/Signup";
import Home from "./components/Home";
import About from "./components/About"
import Kitchens from "./components/Kitchens";
import Contact from "./components/Contact";
// import History from "./components/History";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Account from "./components/Account";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/naslovna" element={<Home/>} /> */}
          <Route path="/o-nama" element={<About/>} />
          <Route path="/kuhinje" element={<Kitchens/>} />
          <Route path="/kontakt" element={<Contact/>} />
          {/* <Route path="/account" element={<Account/>} /> */}
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
