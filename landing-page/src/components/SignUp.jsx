import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Button, Grid, Link, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { register } from "../slice/apiSlice";


const SignUp = () => {

  const [inputs, setInputs] = useState({
    name: "", email: "", password: "", confirmpassword: ""
  })
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,

    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.name === "" || inputs.email === "" || inputs.password === "" || inputs.confirmpassword === "") {
      setError(true);
    } else {
      dispatch(register({
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
        confirmpassword: inputs.confirmpassword,

      }));
      // axios.post("http://127.0.0.1:3000/profile-upload-single", fData)
      // .then(res => { // then print response status
      //     console.warn(res);
      // })
      // navigate("/signin")
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {inputs.name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <Grid display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} marginTop={15}>
      <Card sx={{ width: 400, boxShadow: '15px 15px 5px #ccc' }} >
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <Grid xs={8} sx={{ maxWidth: 380, borderRadius: 10 }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          <Typography marginTop={3} variant="h4" component="h1">
            Register
          </Typography>
          <Typography variant='subtitle1'>Register with your details</Typography>
          <form onSubmit={handleSubmit}>

            <Grid display={'flex'} flexDirection={'column'} padding={2}>
              <TextField
                label="Username"
                type="name"
                name="name"
                variant="outlined"
                margin={'dense'}
                value={inputs.name}
                onChange={handleChange}
              />
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
              <TextField
                label="Confirm Password"
                type="password"
                name="confirmpassword"
                variant="outlined"
                margin={'dense'}
                value={inputs.confirmpassword}
                onChange={handleChange}
              />
              <Button size="large" variant="contained" type='submit'>SignUp</Button>
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

export default SignUp