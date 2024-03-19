import React, {useContext}  from 'react'
import { UserContext } from './components/UserContext/Usercontext'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/home/Home'
import Login from './components/user/Login'
import Register from './components/user/Register'
import Feeds from './components/feeds/Feeds';
import Albums from './components/albums/Albums';
import Users from './components/user/Users';
import Todos from './components/todos/Todos';


// We should call login comp and register 
export default function App() {
    const  {flag, setFlag, name} =useContext(UserContext);

  return (
    <div>
        <Router>
        {flag == 0 || flag==2 ? <Login/>:<Home />}
        {flag ===2 && <Register/>}
        
        <Routes>
        <Route path="/feeds" element={<Feeds />}></Route>
            <Route path="/albums" element={<Albums />}></Route>
            <Route path="/user" element={<Users />}></Route>
            <Route path="/todos" element={<Todos />}></Route>
        </Routes>
        </Router>
        
    </div>
  )
}
