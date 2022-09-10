import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./components/Top.jsx";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage.jsx";
import "./App.css";
import ControlPannel from "./components/ControlPannel.jsx";
import FlightSort from "./components/FlightSort.jsx";
import AddFlight from './components/AddFlight'
import DeleteFlight from './components/DeleteFlight'
function App() {

  return (
    <div className="App">
      <Top />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/controlpannel" element={<ControlPannel/>} />
          <Route path="/controlpannel/sort" element={<FlightSort/>} />
          <Route path="/controlpannel/add" element={<AddFlight/>} />
          <Route path="/controlpannel/delete" element={<DeleteFlight/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
