
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
// import Header from './Components/header';
import Contact from './Components/Contact';
//import ChildComponent from "./Components/child";
import { Parent } from "./Components/Provider";
import NavBar from './Components/NavBar';







function App() {
  
  
  return (
  
    <Router> 
     <Parent>
     <div >
      <NavBar/>
      
      
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            
      </Routes>
      
      
    </div>
    </Parent>
    
    </Router>

  );
}
export default App;

