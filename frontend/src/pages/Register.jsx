import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Register = () => {
    const {register,handleSubmit,formState:errors} = useForm()
    const navigate = useNavigate()
    
    const onSubmit = (data) => {
      console.log(data)
      navigate('/login')
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register('username',{required:true})}/>
          {errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register('email',{required:true})}/>
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register('password',{required:true})}/>
          {errors.password && <span>This field is required</span>}
        </div>
        <button type="submit">Register</button>
      </form>
      <div>
        <p>Already have an account? <a href="/login">Login</a></p>
        </div>

    </div>
  )
}

export default Register