import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from "../slice/apiSlice";
import { Button, Grid, Link, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({
    name: "", email: "", password: "", confirmpassword: ""
  })
  const handleSubmit = (e) => {
    // Prevent the default submit and page reload

    e.preventDefault();
    if(!inputs.email && !inputs.password) {
      alert("no user found");
      navigate("/signin")

    }
        dispatch(login({
          email : inputs.email,
          password : inputs.password
        }))
        
        setInputs({
          name:'',
          email:'',
          password:''
        })
    // Handle validations
    
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,

    }))
  }
 
  return (
        <Grid sx={{ minWidth: 300, borderRadius: 10 }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          <Typography marginTop={3} variant="h4" component="h1">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>

            <Grid display={'flex'} flexDirection={'column'} padding={2}>
              <TextField
                label="Email"
                type="email"
                name="email"
                variant="outlined"
                margin={'dense'}
                value={inputs.email}
                onChange={handleChange}
              />
              <TextField
                label="Password"
                type="password"
                name="password"
                autoComplete="current-password"
                variant="outlined"
                margin={'dense'}
                value={inputs.password}
                onChange={handleChange}
              />
              <Button size="large" variant="contained" type='submit'>Login</Button>
            </Grid>
          </form>
          <Typography variant="body" component="body" marginBottom={2}>
            Dont have Account - <NavLink to={'/'}>SignUp</NavLink>
          </Typography>
        </Grid>
  )
}

export default SignIn