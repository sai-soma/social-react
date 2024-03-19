import React, { useContext } from 'react'
import { UserContext } from '../UserContext/Usercontext';
import { Link } from 'react-router-dom';

import './Home.css'

function Home() {
    const {flag , setFlag, name} =useContext(UserContext);
  return (
    <div className='top-nav-container'>
        <div className='nav-links'>
            <Link to="/feeds">Feeds</Link>
            <Link to="/albums">Albums</Link>
        </div>
        <div className='user-info'>
            <div>Hello! {name} you have successfully Logged in </div>
        </div>
        <button className='logout-button' onClick={() =>setFlag(0)}>LOGOUT</button>
    </div>
  )
}
export default Home;