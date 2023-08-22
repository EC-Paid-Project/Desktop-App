import React, { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/SignIn";
import Signup from "./pages/SignUp";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
