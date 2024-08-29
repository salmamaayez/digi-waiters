import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function UserPage() {
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Orders</Typography>
      </Stack>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60vh',
          gap: 2,
          backgroundColor: '#f9f9f9',
          padding: 2, // Ajout d'un padding pour les petits écrans
        }}
      >
        <Button
          component={Link}
          to="/step1"
          variant="outlined"
          sx={{
            padding: '15px 20px',
            textTransform: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: 500,
            height: '75px',
            backgroundColor: 'white',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            borderColor: 'transparent',
            '&:hover': {
              borderColor: 'transparent',
            },
            '&:focus': {
              outline: 'none',
            },
            '&:active': {
              borderColor: 'transparent',
            },
            '@media (max-width: 600px)': {
              width: '100%', // Le bouton prend toute la largeur sur les petits écrans
              padding: '10px 15px', // Ajustement du padding pour les petits écrans
              height: '60px', // Réduction de la hauteur pour les petits écrans
            },
          }}
        >
          <Typography variant="body1" sx={{ color: '#333' }}>
            New Order
          </Typography>
          <Box
            sx={{
              marginLeft: 'auto',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '15px solid #FFA500',
              transform: 'rotate(90deg)',
            }}
          />
        </Button>

        <Button
          component={Link}
          to="/current-orders"
          variant="outlined"
          sx={{
            padding: '15px 20px',
            textTransform: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: 500,
            height: '75px',
            backgroundColor: 'white',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            borderColor: 'transparent',
            '&:hover': {
              borderColor: 'transparent',
            },
            '&:focus': {
              outline: 'none',
            },
            '&:active': {
              borderColor: 'transparent',
            },
            '@media (max-width: 600px)': {
              width: '100%', // Le bouton prend toute la largeur sur les petits écrans
              padding: '10px 15px', // Ajustement du padding pour les petits écrans
              height: '60px', // Réduction de la hauteur pour les petits écrans
            },
          }}
        >
          <Typography variant="body1" sx={{ color: '#333' }}>
            Current Orders
          </Typography>
          <Box
            sx={{
              marginLeft: 'auto',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '15px solid #FFA500',
              transform: 'rotate(90deg)',
            }}
          />
        </Button>
      </Box>
    </Container>
  );
}
