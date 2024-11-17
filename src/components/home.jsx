import React from 'react'
import Navbar from './navbar'
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import campingMain from '../images/CampingMain.jpeg';
import beautyMain from '../images/BeautyMain.jpg';
import jewelleryMain from '../images/JewelleryMain.jpg';

function Home() {
    const navigate = useNavigate();
    const handleData = (page) => {
        console.log(page);
        navigate(`/Shopping/${page}`);
    }

    const bestSellerList = [
        {
            name: "Beauty",
            description: "",
            image:beautyMain
        },
        // {
        //     name: "Camping",
        //     description: "Camping offers a unique opportunity to reconnect with nature. So here is the camping edition can ensure a comfortable and enjoyable experience.",
        //     image:campingMain
        // },
        {
            name:'Jewellery',
            description: "",
            image:jewelleryMain
        }
    ]
    return (
        <div className='App'>
            <Navbar />
            <div className='shoppingRow'>

                <Grid
                    container
                    spacing={2}
                    className='gridRow'
                >
                    {bestSellerList.map((bestSeller,i) => {
                        return (
                            <Grid item xs={8}>
                                <Card sx={{ display: 'flex', alignItems: 'center', /*maxWidth: 500*/ cursor: "pointer" }}>
                                    {/* Image on the left */}
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 350, height: 300}}
                                        image={bestSeller?.image}
                                        alt="Example"
                                        onClick={() => handleData(bestSeller.name)}

                                    />
                                    {/* Text content */}
                                    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                        <CardContent>
                                            <Typography variant="h5">{bestSeller?.name}</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {bestSeller?.description}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>
                        )
                    })}


                </Grid>

            </div>
        </div>
    )
}


export default Home