import React, { useState } from 'react'
import './../../node_modules/bootstrap/dist/css/bootstrap.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [cpass, SetCpass] = useState('')

  const navigate = useNavigate()

  const data = (e) => {
    e.preventDefault()
    if(!name || !email || !pass || !cpass) {
      toast.error('All fields are required')
      return
    }
    if(pass !== cpass) {
      toast.error('Password and confirm password should be same')
      return
    }
    if(name && email && pass && cpass) {
      toast.success('You have registered')
    }
    localStorage.setItem('email', email)
    navigate('/login')


  }

  return (
    <>
      <div className='text-center mt-5'>
        <form onSubmit={data}>
          Name: <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input> <br /><br />
          Email: <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input> <br /><br />
          Password: <input type='password' value={pass} onChange={(e) => setPass(e.target.value)}></input> <br /><br />
          Confirm Password: <input type='password' value={cpass} onChange={(e) => SetCpass(e.target.value)}></input> <br /><br />
          <input type='submit'></input>
        </form>

      </div>

    </>
  )
}

export default Register
