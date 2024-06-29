import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Welcome from './components/Welcome'
import Hero from './components/Hero'


function App() {


  return (
    <>
     <Router>
      <Routes>\
        
        <Route path='/' exact Component={Welcome} />
        <Route path='/hero' Component={Hero} />
      </Routes>
     </Router>
    </>
  )
}

export default App
