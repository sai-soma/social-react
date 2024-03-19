import React from 'react'
import { useState,useEffect } from 'react';

export default function Feeds() {
  const [data,setData] = useState([]);
 const url ="https://jsonplaceholder.typicode.com/posts"

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
      {data && data.map((v) => <div key={v.id}><b>{`${v.id})`}</b>{v.body}<br/><br/></div>)}
    </div>
  )
}
