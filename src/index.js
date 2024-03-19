import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { UserContext } from './Context';
import Usercontext from './components/UserContext/Usercontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Usercontext>
      <App/>
      </Usercontext>
    </>
);


