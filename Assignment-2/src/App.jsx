import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import Calculator from "./pages/Calculator";
import TemperatureConverter from "./pages/TemperatureConverter";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calculator" element={<Calculator />} />
                {/* TASK 2.1: Add a route for TemperatureConverter Page */}
                <Route path="/temperature-converter" element={<TemperatureConverter />} />
            </Routes>
        </Router>
    );
}

export default App;
