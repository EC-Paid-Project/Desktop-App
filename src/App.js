import React, { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route ,RelativeRoutingType} from "react-router-dom";
import EntryForm from "./pages/EntryForm";
import Login from "./pages/Login";
import History from "./pages/History";
import Choose from "./pages/Choose"
import AppointmentForm from "./pages/AppointmentForm";
import AppointmentComponent from "./pages/AppointmentHistory";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route   path="*" element={<AppointmentForm />} />
          <Route path="/entry" element={<EntryForm />} />
          <Route path="/history" element={<History/>} />
          <Route path="/appointmentHistory" element={<AppointmentComponent/>} />
    {/* Redirect to /login  */}
{/*if  path not found */}


          <Route path="/" element={<Choose />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
