import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';

const SignUp = () => {
  return (
    <Grid display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
    <Grid xs={8}sx={{maxWidth: 380}} >
      <Grid  >
      <Typography variant="h4" component="h2">
          Register
        </Typography>
      </Grid>
      <Typography variant='subtitle1'>Register with your personal details for continue</Typography>
      <Grid  display={'flex'} flexDirection={'column'} padding={2}>
        <TextField
          label="Username"
          multiline
          maxRows={4}
          variant="outlined"
          margin={'dense'}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          margin={'dense'}
        />
         <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          margin={'dense'}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          margin={'dense'}
        />
        <Button size="large" variant="contained" >Login</Button>
      </Grid>
    </Grid>
  </Grid>
  )
}

export default SignUp