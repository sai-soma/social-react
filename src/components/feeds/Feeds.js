import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { useContext } from 'react';

export default function Feeds() {
  const [data,setData] = useState([]);
  
  const url =`https://jsonplaceholder.typicode.com/posts/`;

  const showComms=(id)=>{
  const url1 =`https://jsonplaceholder.typicode.com/comments/?postId=${id}`;
  fetchData(url1);
  <div>
      {data && data.map((v) => <div key={v.id}><b>{`${v.id})`}</b>{v.name}<br/>
      </div>)}
    </div>
 }

 const fetchData =async (url) => {
  try {
    const response =await fetch(url);
    const result =await response.json();
    setData(result);
    // const response=await axios.get(url);
    // setData(response.data)
  }
  catch (err) {
    console.log(err);
  }
 }
 useEffect(() =>{
  fetchData(url)
 },[url]);

  return (
    <div>
      {data && data.map((v) => <div key={v.id}>
        <b>UserId:{`${v.id}`}</b><br/>
        <b>Body:</b>{v.body}<br/>
      <button onClick={()=>showComms(v.id)}>Comments</button><br/>
      <hr/></div>)}
    </div>
  )
}
