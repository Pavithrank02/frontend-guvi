import React, { useEffect, useState } from 'react'
import { Grid, TextField, Typography } from '@mui/material'
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

    <Grid >
      {data &&
        Object.entries(obj).map(([key, value]) => {
          console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
          return (

            <Grid xs={8} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
              <Grid xs={4} sx={{ textTransform: 'capitalize' }} marginTop={2}>
                <Typography sx={{ fontWeight: 'bold' }} variant='h5'>
                  {key}:
                </Typography>
              </Grid>
              <Grid xs={4} display={'flex'} flexDirection={'row'} >
                <TextField
                  fullWidth
                  label={value}
                  id="fullWidth"
                />
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


