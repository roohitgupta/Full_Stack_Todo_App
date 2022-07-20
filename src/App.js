import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Navbar from "./component/Navbar/Navbar"
import Home from "./component/Home"
import Login from "./component/Login/Login"
import Signup from "./component/Signup/Signup"





function App() {
  return (
    <div>
     
     <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/tasklist" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
    
  );
}

export default App;
