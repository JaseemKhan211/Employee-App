import React, { useState } from 'react';

const Login = (props) =>{
  
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();

  const updateEmail = (event) =>{
    setEmail(event.target.value);
  }

  const updatePassword = (event) =>{
    setPassword(event.target.value);
  }

return(
  <React.Fragment>
        <div>
          <h1 className="heading_style">Log in</h1>
          <input 
            type="text" 
            placeholder="Email..." 
            name="email"
            onChange={updateEmail}
          />
          <br />
          <input 
            type="password" 
            placeholder="Password..." 
            name="password"
            onChange={updatePassword}
          />
          <button 
            type="submit" 
            onClick={() => props.updateUser({ email, password })}
            className="login_btn"
          > 
            Login 
          </button>
        </div>
  </React.Fragment>
    )
}
export default Login;