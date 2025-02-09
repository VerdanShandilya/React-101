
import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const {setuser} =useContext(UserContext)

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        setuser(username);
    }
  return (
    <div>
        <h2>Login</h2>
        <input  value={username} onChange={(e)=>setusername(e.target.value)} type="text" placeholder="username"/> 
        <input  onChange={(e) => setpassword(e.target.value)}type="text" placeholder="password"/> 
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
