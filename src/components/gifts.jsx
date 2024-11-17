import React from 'react'
import Navbar from './navbar'
import { useNavigate } from 'react-router-dom'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import campingMain from '../images/CampingMain.jpeg';
import paintingMain from '../images/paintingMain.png';
import "../pages/shopping.css"

function Gift() {

  const navigate = useNavigate();
    const handleData = (page) =>{
        console.log(page);
        navigate(`/Shopping/${page}`);
    }


  return (
<div className='App'>
        <Navbar/>
        <div className='shoppingRow'>
            <Grid
            container
            spacing={2}
            className='gridRow'
            >
                <Grid item xs={4}>
                    <Card>
                    <CardActionArea>
                            <CardMedia
                            component="img"
                            height="250"
                            image={paintingMain}
                            alt="green iguana"
                            onClick={()=>handleData("painting")}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component="div">
                                    Painting
                                </Typography>
                                <Typography variant='body2' color="text.secondary">
                                    hPainting is a timeless art form, capturing emotions, stories, and perspectives through strokes of color on canvas
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
               

            </Grid>
        </div>
    </div>
  )
}

export default Gift