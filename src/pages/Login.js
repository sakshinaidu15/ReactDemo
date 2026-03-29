import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Data from "./AuthContext";

const Login = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const { login } = useContext(Data)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    let token = ''
    for (let i = 0; i < 6; i++) {
      token += Math.floor(Math.random() * 10)
    }
    login(token)          // Update context state
    navigate("/cart")
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <form onSubmit={handleLogin}>
        Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />
        Password: <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
