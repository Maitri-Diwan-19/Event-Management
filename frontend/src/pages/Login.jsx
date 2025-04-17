import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'

const Login = () => {
    const {register,handleSubmit,formState: errors} = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => {
      console.log(data)
      navigate('/')
    }
    
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type ="text" placeholder = "Email" {
          ...register('email',{required:true})
        }/>
        {errors.email && <span> email is required</span>}
        <input type ="password" placeholder = "Password" {
          ...register('password',{required:true})
        }/>
        {errors.password && <span> password is required</span>}
        <button type="submit">Login</button>
        <div>
          <p>Don't have an account? <a href="/register">Register</a></p>
          </div>
         
      </form>


    </div>
  )
}

export default Login