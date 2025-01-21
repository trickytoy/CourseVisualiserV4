import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";

const pages = ['Home', 'Prospects']; // Added 'Home' for navigation to the home page

function Header(props) {
  return (
        <AppBar 
          position="static" 
          maxWidth="xl" >
          <Container maxWidth="md">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  mr: 2,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                BLEND
              </Typography>
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                {pages.map((page) => (
                  <Button 
                    key={page} 
                    component={Link} 
                    to={page === 'Home' ? '/' : `/${page}`} // Map Home to "/" and others to "/page"
                    sx={{ color: 'white' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
  );
}

export default Header;
