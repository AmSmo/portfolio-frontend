import React, { useState } from "react"
import {LoginCenter} from '../styles/styles'
type SignInProps = {

}

const SignIn:React.FC<SignInProps> = ({}) => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    
    const handleLogin = (e) =>{
        e.preventDefault()
        console.log(username, password)
    }

    const handleChange = (e) =>{
        switch (e.target.name){
            case "username":
                setUsername(e.target.value)
                break;
            case "password":
                setPassword(e.target.value)
                break;
            default:
                break;
        }
    }
  return (
    <LoginCenter>
      <form onSubmit={handleLogin}>
          <div className="login-field">
          <label htmlFor="username">Username: </label>
          <input id="username" type='text' name="username" onChange={handleChange} value={username} placeholder="Username"/>
          </div>
          <div className="login-field">
          <label htmlFor="password">Password: </label>
          <input id="password" type='password' name="password" onChange={handleChange} value={password} placeholder="Password"/>
          </div>    
            <input type="submit" value="Login"/>
      </form>
    </LoginCenter>
  )
};

export default SignIn;
