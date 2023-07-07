import React from 'react'
import { Avatar, Button, Card, Grid, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Header from '../components/Header'

const Home = () => {
  return (
    <Grid xs={12} >
      <Card sx={{
        minWidth: 230,
        height: '750px',
        background: 'linear-gradient(180deg, #4d4dff, #8533ff)',
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"

      }}>


        <Card sx={{
          minWidth: 230,
          height: '90vh',
          width: "90vw",
          borderRadius: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "space-between",
        }}>
          <Grid>
            <Header />
          </Grid>

          <Grid xs={6} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Avatar alt="Remy Sharp" style={{ height: '220px', width: '220px' }} sx={{ ml: '60px' }} src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} />
            <Grid alignItems={'left'}>

              <Typography marginTop={2} variant='h3'>
                Username:
                <IconButton aria-label="delete" size="large">
                  <EditIcon fontSize="inherit" />
                </IconButton>
              </Typography>
              <Typography variant='h5'>
                Email ID:
                <IconButton aria-label="delete" size="large">
                  <EditIcon fontSize="inherit" />
                </IconButton>
              </Typography>
              <Typography variant='h5'>
                Age:
                <IconButton aria-label="delete" size="large">
                  <EditIcon fontSize="inherit" />
                </IconButton>
              </Typography>
              <Typography variant='h5'>
                Gender:
                <IconButton aria-label="delete" size="large">
                  <EditIcon fontSize="inherit" />
                </IconButton>
              </Typography>
              <Typography variant='h5'>
                DOB:
                <IconButton aria-label="delete" size="large">
                  <EditIcon fontSize="inherit" />
                </IconButton>
              </Typography>
              <Typography variant='h5'>
                Mobile:
                <IconButton aria-label="delete" size="large">
                  <EditIcon fontSize="inherit" />
                </IconButton>
              </Typography>
            </Grid>
          </Grid>

        </Card>
      </Card>

    </Grid>
  )
}

export default Home