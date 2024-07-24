import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import Hero from "./components/Hero";
import { useEffect } from "react";
import Dashboard from "./components/Admin/Dashboard";
import FormEditRsvp from "./components/Admin/FormEditRsvp";
import TableReservasi from "./components/Admin/TableReservasi";

import TableUcapan from "./components/Admin/TableUcapan";
import FormEditUcapan from "./components/Admin/FormEditUcapan";
import Login from "./components/Admin/Login";

function App() {
  useEffect(() => {
    // Inisialisasi AudioContext setelah tindakan pengguna (misalnya, klik tombol play)
    const initAudioContext = async () => {
      try {
        await new AudioContext().resume();
        console.log("AudioContext resumed successfully.");
      } catch (error) {
        console.error("Error resuming AudioContext:", error);
      }
    };

    initAudioContext();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact Component={Welcome} />
          <Route path="/hero" Component={Hero} />
          <Route path="/admin" Component={Dashboard} />
          <Route path="/edit/:id" Component={FormEditRsvp} />
          <Route path="/reservasi" Component={TableReservasi} />
          <Route path="/ucapan" Component={TableUcapan} />
          <Route path="/ucapan/edit/:id" Component={FormEditUcapan} />
          <Route path="/login" Component={Login} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
