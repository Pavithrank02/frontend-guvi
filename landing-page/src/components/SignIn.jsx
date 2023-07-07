import React, { useState } from 'react'
import { Button, Grid, Link, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

const SignIn = () => {

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
          email : email,
          password : password
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
    <Grid display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} marginTop={15}>
      <Card sx={{ width: 400, boxShadow: '15px 15px 5px #ccc' }} >
        <Grid xs={8} sx={{ maxWidth: 380, borderRadius: 10 }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
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
            Already have Account - <Link>SignIn</Link>
          </Typography>
        </Grid>
      </Card>
    </Grid>
  )
}

export default SignIn