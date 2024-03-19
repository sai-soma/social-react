import React, {useContext}  from 'react'
import { UserContext } from './components/UserContext/Usercontext'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/home/Home'
import Login from './components/user/Login'
import Register from './components/user/Register'
import Feeds from './components/feeds/Feeds';
import Albums from './components/albums/Albums';


// We should call login comp and register 
export default function App() {
    const  {flag, setFlag} =useContext(UserContext);

  return (
    <div>
        <Router>
        {flag == 0 || flag==2 ? <Login/>:<Home />}
        {flag ===2 && <Register/>}
        
        <Routes>
            <Route path="/feeds" index element={<Feeds />}></Route>
            <Route path="/post" element={<Albums />}></Route>
        </Routes>
        </Router>
        
    </div>
  )
}
