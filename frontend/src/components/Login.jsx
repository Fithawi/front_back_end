import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import './Login.css';
const Login = () => {
 const [user, setUser] = useState("");
 const [email, setEmail] =useState("");
 const [pass, setPass] = useState("");
const navigate = useNavigate();
 const handleSubmit = (e) =>{
  e.preventDefault();
navigate("/counter");
 }
  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <label for="user">User:</label>
            <input id="user" type="text" onChange={(e)=>{setUser(e.target.value)}} value={user}placeholder="User"/><br />
            <label for="email">Email:</label><input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/><br />
            <label for="password">Password:</label><input id="password" value={pass} type="password" onChange={(e)=>{setPass(e.target.value)}} placeholder="Password"/><br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Login;
