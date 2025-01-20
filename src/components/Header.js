import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

const pages = ['Prospects'];

function MinimalisticHeader() {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={4}>
        <AppBar position="static" maxWidth="xl" sx={{
                  borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px'}}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography
                variant="h6"
                component="a"
                href="#"
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
                  <Button key={page} sx={{ color: 'white' }}>
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
      <Grid item xs={12} md={4}></Grid>
    </Grid>
  );
}

export default MinimalisticHeader;
