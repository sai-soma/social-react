import React from 'react'
import { useEffect, useState } from 'react';
import { UserContext } from '../UserContext/Usercontext';
import { useContext } from 'react';
export default function Todos() {
    const [data,setData] = useState([]);
  const url =`https://jsonplaceholder.typicode.com/todos/`;

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
    
    <div className="feeds-container">
    {data && data.map((elem) => (
      <div key={elem.id}>
        <div>UserId: {elem.userId}</div>
        <div>Id: {elem.id}</div>
        <div>Title: {elem.title}</div>
        <div>Completed: {(elem.completed)?"true":"false"}</div><br></br>
      </div>
    ))}
  </div>
  )
}
