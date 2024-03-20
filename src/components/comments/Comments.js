import React, { useContext } from "react";
import { useState,useEffect } from "react";
import { UserContext } from "../UserContext/Usercontext";
export default function Comments(props) {
  const { user } = useContext(UserContext);
  const url = `https://jsonplaceholder.typicode.com/comments/?postId=${props.id}`;
  const [data,setData] = useState([]);
  
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
      <details>
        <summary>
          View Comments
        </summary>
        <div>
          {data &&
            data.map((elem) => (
              <li key={elem.id}>
                {elem.email}- {elem.body}
               </li>
            ))}
        </div>
      </details>
    </div>
  );
}