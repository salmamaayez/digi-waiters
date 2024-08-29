import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Box, Button, Select, MenuItem, Typography } from '@mui/material';


export default function Step1({ onNext }) {
  const [selectedTable, setSelectedTable] = useState('');
  const navigate = useNavigate();

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };
  const handleNext = () => {
    onNext(selectedTable);
  };

  return (
    <Container sx={{ position: 'absolute', minHeight: '90vh' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">
          Orders
          <Typography
            variant="h6"
            component="span"
            sx={{ color: '#B0B0B0', marginLeft: 0.5, fontWeight: 'normal' }}
          >
            /step1
          </Typography>
        </Typography>
      </Stack>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60vh',
          gap: 2,
          padding: '0 16px',
          '@media (max-width: 600px)': {
            height: 'auto',
          },
          '@media (min-width: 960px)': {
            height: '70vh',
          },
          '@media (min-width: 1280px)': {
            height: '80vh',
          },
        }}
      >
        <Typography variant="h5" textAlign="center">
          Select Table
        </Typography>
        <Select
          value={selectedTable}
          onChange={handleTableChange}
          displayEmpty
          sx={{
            width: '100%',
            maxWidth: 300,
            marginBottom: 3,
            '@media (max-width: 600px)': {
              maxWidth: '100%',
            },
            '@media (min-width: 960px)': {
              maxWidth: 400,
            },
            '@media (min-width: 1280px)': {
              maxWidth: 500,
            },
          }}
        >
          <MenuItem value="" disabled>
            Select a table
          </MenuItem>
          <MenuItem value="Table 1">Table 1</MenuItem>
          <MenuItem value="Table 2">Table 2</MenuItem>
          <MenuItem value="Table 3">Table 3</MenuItem>
        </Select>
        <Button
          variant="contained"
          disabled={!selectedTable}
          onClick={handleNext}
          sx={{
            width: '100%',
            maxWidth: 300,
            '@media (max-width: 600px)': {
              maxWidth: '100%',
            },
            '@media (min-width: 960px)': {
              maxWidth: 400,
            },
            '@media (min-width: 1280px)': {
              maxWidth: 500,
            },
          }}
        >
          Next
        </Button>
      </Box>
      <Button
        onClick={() => navigate(-1)}
        variant="outlined"
        sx={{
          position: 'absolute',
          bottom: '100px',
          left: '16px',
          padding: '8px 16px',
          borderColor: '#B0B0B0',
          color: '#333',
          '&:hover': {
            borderColor: '#1F45FC',
            backgroundColor: '#1F45FC',
            color: '#fff',
          },
        }}
      >
        Back
      </Button>
    </Container>
  );
}

Step1.propTypes = {
  onNext: PropTypes.func.isRequired,
};
