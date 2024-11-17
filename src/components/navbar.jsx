import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "../pages/navbar.css";

const pages = ['Home','Shopping'];

function Navbar() {

    const navigate = useNavigate();

    const navPage = (page,e)=>{
        e.preventDefault();
        console.log(page);
        if(page != 'Home')
            navigate(`/${page}`);
        else
            navigate(`/`);
    }

  return (
        <AppBar position='static' style={{background:'white'}}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                    variant='h6'
                    noWrap
                    component="a"
                    href='#app-bar-with-responsive-menu'
                    sx={{
                        mr:2,
                        display:{
                            md:'flex'
                        },
                        fontFamily:'monospace',
                        fontWeight:700,
                        letterSpacing:'.3rem',
                        color:'inherit',
                        textDecoration:'none'
                    }}>
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow:1,display:{
                        md:'flex'
                    }}}>
                        {pages.map((page,i)=>(
                            <button className='navBarButton'
                            key={page}
                            onClick={(e)=>{navPage(pages[i],e)}}>
                                {page}
                            </button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default Navbar