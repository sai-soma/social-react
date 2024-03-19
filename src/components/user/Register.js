import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../UserContext/Usercontext'
import "./Register.css"

export default function Register() {
    const {flag, setFlag , user,setUser ,users ,setUsers ,name, setName} = useContext(UserContext)
    const addUser =() =>{
        setUsers((prev) => [...prev,user])
       setName(user.name);
       setUser()
        setFlag(1);
    }
  return (
    <> <div className='Register-model'>
        <div className='Register-model-content'>
            <div className='Register-header'>
                <div className='Register-signup-title'>Register</div>
                    <div onClick={() => setFlag(() => 0)} className="close">
                            &times;
                 </div>
            </div>
            <input 
            type="text"
            value={user.name}
            onChange={(e) =>
                setUser(prev => ({
                    ...prev,
                    ... {name: e.target.value }
                }))
            }
            placeholder="Enter Name"
            className='Register-input'
            />
            <br />
            <input 
             type="email"
             value={user.email}
             onChange={(e) => 
            setUser(prev => ({
                ...prev,
                ...{email: e.target.value}
            })) 
            }
            placeholder='Enter email'
            className='Register-input'
            />
            <br />
            <input 
            type="password"
            value={user.password}
            onChange={(e) => 
            setUser(prev =>({
                ...prev, 
                ...{ password : e.target.value}

            }))
            }
            placeholder='Enter Password'
            className='Register-input'
            />
            <br />
            <button onClick={addUser} className='Register-button'>SUBMIT</button>
        </div>
        </div>
    </>
  )
}
