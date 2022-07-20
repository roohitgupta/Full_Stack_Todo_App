import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from "./component/Navbar/Navbar"
import Home from "./component/Home"
import Task from "./component/Task/Task"
import Login from "./component/Login/Login"
import Signup from "./component/Signup/Signup"




function App() {
  return (
    <div>
     
      <Home />

      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/tasklist" element={<Home />}></Route>
      </Routes>

    </div>
    
  );
}

export default App;
