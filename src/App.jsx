import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Welcome from './components/Welcome'
import Hero from './components/Hero'
import { useEffect } from 'react';


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
       

        <Route path='/' exact Component={Welcome} />
        <Route path='/hero' Component={Hero} />
        
      </Routes>
     </Router>
    </>
  )
}

export default App
