import React from 'react'
import { useState,useEffect } from 'react';
import Images from './Images';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default function Albums() {
  const [data,setData] = useState([]);
 const url ="https://jsonplaceholder.typicode.com/albums"

 const handleClick=()=>{
  <Routes>
  <Route path="/albums" element={<Images />}></Route>
</Routes>
 
 }

 const fetchData =async (url) => {
  try {
    const response =await fetch(url);
    const result =await response.json();
    setData(result);
  }
  catch (err) {
    console.log(err);
  }
 }
 useEffect(() =>{
  fetchData(url)
 },[])
  return (
    <div>
      {data && data.map((v,i) => <div key={v.id} onClick={handleClick}>{v.title}<br/><br/></div>)}
    </div>
  )
}
