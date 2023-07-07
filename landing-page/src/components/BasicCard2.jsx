import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import img from '../assets/images/wave.png'
import SignIn from '../pages/SignIn';

export const BasicCard2 = (props) => {

  return (

    <Grid sx={{ flexGrow: 1, }} >
      <img style={{ width: '100%', height: '100%', minWidth: '400px' }} src={img} alt="gshs" />
      <Grid container spacing={1}
        marginTop="-400px"
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        
      >
        <Grid xs={4} sx>
          <Card  sx={{
            minWidth: 230,
            borderRadius: '30px',
            height: '400px',
            boxShadow:'10px 10px #ccc'
          }}>
              
            <CardContent >
              <SignIn />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>

  )
}
