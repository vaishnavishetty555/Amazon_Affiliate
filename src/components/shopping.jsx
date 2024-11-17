import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './navbar';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import campingMain from '../images/CampingMain.jpeg';
import paintingMain from '../images/paintingMain.png';
import "../pages/shopping.css"
function Shopping() {

    const navigate = useNavigate();
    const handleData = (page) => {
        console.log(page);
        navigate(`/Shopping/${page}`);
    }

    const listOfItems = [
        'Beauty',
        'Jewellery',
        'Painting'
    ]
    return (
        <div className='App'>
            <Navbar />
            <div className='shoppingRow'>
                <Grid
                    container
                // spacing={2}
                // className='gridRow'
                >
                    {listOfItems.map((listOfItem, i) => {
                        return (
                            <Grid item xs={1}>
                                <ul>
                                    <li onClick={() => handleData(listOfItem)}>
                                        {listOfItem}
                                    </li>
                                </ul>
                            </Grid>
                        )
                    })}


                </Grid>
            </div>
        </div>
    )
}

export default Shopping