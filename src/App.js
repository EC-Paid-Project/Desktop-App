import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import EntryForm from "./pages/EntryForm";
import Login from "./pages/Login";
import History from "./pages/History";
import Choose from "./pages/Choose";
import AppointmentForm from "./pages/AppointmentForm";
import AppointmentComponent from "./pages/AppointmentHistory";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <NavBar />
                <Routes>
                  <Route index element={<Choose />} />
                  <Route path="login" element={<Login />} />
                  <Route path="entry" element={<EntryForm />} />
                  <Route path="history" element={<History />} />
                  <Route path="appointmentHistory" element={<AppointmentComponent />} />
                  <Route path="appointment/" element={<AppointmentForm />} />
                </Routes>
              </>
            }
          />
          <Route
            path="*"
            element={<Navigate to="/login" replace />} // Redirect to /login if path not found
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
