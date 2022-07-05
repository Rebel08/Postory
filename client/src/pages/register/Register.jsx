import {useState } from 'react';
import './register.css'
import axios from 'axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Register = () => {
  const [username , setUsername] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [error , setError] = useState(false);

const handleSubmit= async (e) => {
  e.preventDefault();
  setError(false);
  try{
   
  const res = await axios.post("/auth/register",{
    username,
    email,
    password,
  });
  // console.log(res);
  res.data && window.location.replace("/login");
}
catch (err) {
  // console.log(err);
  setError(true);
}

};

  return (
    <div className="register">
       <form  className="registerForm" onSubmit={handleSubmit}>
           <span className="registerTitle">Register</span>
           { error &&   
           <span style={{color: "red", margin:"5px 0px 5px 0px"}}>Something went wrong</span>
           }
          <label>Username</label>
          <input className="registerInput" type="text"  placeholder="Enter Username" onChange={e=>setUsername(e.target.value)}/>
          <label>Email</label>
          <input className="registerInput" type="text"  placeholder="Enter email" onChange={e=>setEmail(e.target.value)}/>
          <label>Password</label>
          <input className="registerInput" type="password"  placeholder="Enter password" onChange={e=>setPassword(e.target.value)}/>
          <button className="registerButton" type="submit">Register</button>
       </form>
          <button className="registerLoginButton"><Link to ='/login' className="link">LOGIN</Link></button>

    </div>
  )
}

export default Register