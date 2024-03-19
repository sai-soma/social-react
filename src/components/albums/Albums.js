import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default function Albums() {
  const [data,setData] = useState([]);
 const url =`https://jsonplaceholder.typicode.com/albums`;

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
     
      {
      data && data.map((v,i) => <div key={v.id}><b>UserId={v.userId}</b><br/>
      Id={v.id}<br/>
      Title:{v.title}<br/><br/><hr/></div>)
      }
    </div>
  )
}
