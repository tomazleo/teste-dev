import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/login/login';
import Dashboard from './Components/Login/Dashboard';




function App() {
 
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </div>
  ) 
}

export default App
