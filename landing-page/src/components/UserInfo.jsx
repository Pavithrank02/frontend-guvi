import React, { useEffect, useState } from 'react'
import { Avatar, Button, Card, Grid, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import ModalUI from './Modal';

const UserInfo = (props) => {
  console.log("UI", props)
  const id = props && props.data.data.data.map((u) => {
    return u.id
  })
  const [data, setData] = useState("")
  const obj = data && data.data.data[0]

  useEffect((e) => {
    fetchusers()

  },
    []
  );

  const fetchusers = () => {
    axios.get(`http://127.0.0.1:3000/user/${id}`).then((response) => {
      setData(response);

      console.log(response);
    });
  }

  return (

    <Grid alignItems={'left'}>
      {data &&
        Object.entries(obj).map(([key, value]) => {
          console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
          return (

            <Grid xs={8} display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}>
              <Grid xs={2} sx={{ textTransform: 'capitalize' }}>
                <Typography sx={{ fontWeight: 'bold' }} variant='h5'>
                  {key}:
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Typography  variant='h6'>
                  {value}
                </Typography>
              </Grid>
              <Grid xs={2}>
                <ModalUI />
              </Grid>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default UserInfo


