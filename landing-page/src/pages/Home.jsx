import React, { useEffect, useState } from 'react'
import { Avatar, Button, Card, Grid, Typography } from '@mui/material'
import Header from '../components/Header'
import axios from "axios";
import UserInfo from '../components/UserInfo';

const Home = () => {
  const [data, setData] = useState("")
  // const [user, setUser] = useState("")
  console.log("home",data)
  
  useEffect((e) => {
    fetchusers()
    
  },
    []
  );

  const fetchusers = () => {
    axios.get(`http://127.0.0.1:3000/user`).then((response) => {
      setData(response);
      
      console.log(response);
    });
  }
  

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
          justifyContent: "flex-start",
        }}>
          <Grid>
            <Header />
          </Grid>
          {data && <Grid xs={6} display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'} alignItems={'center'} marginTop={2}>
            <Avatar alt="Remy Sharp" style={{ height: '220px', width: '220px' }} sx={{ ml: '60px' }} src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} />
              <UserInfo data={data}/>
          </Grid> 
          }
          

        </Card>
      </Card>
    </Grid>
  )
}

export default Home