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
          <Route exact path="/" element={<Home/>} />
          {/* <Route path="/naslovna" element={<Home/>} /> */}
          <Route exact path="/o-nama" element={<About/>} />
          <Route exact path="/kuhinje" element={<Kitchens/>} />
          <Route exact path="/kontakt" element={<Contact/>} />
          <React path="*" element={<h2>Page Not Found</h2>}/>
          {/* <Route path="/account" element={<Account/>} /> */}
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
