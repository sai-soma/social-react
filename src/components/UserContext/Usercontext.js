import React, { createContext, useState  } from 'react'

export const UserContext = createContext(null);
const Usercontext = (props) => {
    
    const [users,setUsers] = useState([]);
    const [user, setUser] = useState({name:'',email:'',password:''});
    const [name,setName] =useState();
    const [flag,setFlag] =useState(0);
    const [username, setUserName]= useState();
    const val ={flag, setFlag , user,setUser ,users ,setUsers ,name, setName, username, setUserName}
  return (
    <div>
        <UserContext.Provider value={val}>
            {props.children}
        </UserContext.Provider>
    </div>
  )
}
export default Usercontext;