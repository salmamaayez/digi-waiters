import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, Typography } from '@mui/material';

import { products} from 'src/_mock/products'; 

import ProductCard from '../product-card';
import OrderSummary from '../OrderSummary';
import ProductFilters from '../product-filters';
import { CategoriesProvider } from '../CategoriesContext';

export default function Step2({ onFinish, selectedTable }) {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [selectedItems, setSelectedItems] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleFilterChange = (category) => {
    setCategoryFilter(category);
    handleCloseFilter();
  };


  const handleSelectItem = (id, isSelected) => {
    setSelectedItems(prevState => {
      const newState = { ...prevState };
      if (isSelected) {
        newState[id] = { quantity: 1 };  // Default quantity
      } else {
        delete newState[id];
      }
      return newState;
    });
  };

  const handleQuantityChange = (id, quantity) => {
    setSelectedItems(prevState => ({
      ...prevState,
      [id]: { ...prevState[id], quantity }
    }));
  };

  const handleFinish = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const filteredProducts = products.filter(
    (product) => categoryFilter === 'All' || product.category === categoryFilter
  );

  return (
    <Container sx={{ position: 'relative' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">
          Orders
          <Typography
            variant="h6"
            component="span"
            sx={{ color: '#B0B0B0', marginLeft: 0.5, fontWeight: 'normal' }}
          >
            /step2
          </Typography>
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => navigate(-1)}
            variant="outlined"
            sx={{
              padding: '8px 18px',
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
          <Button variant="contained" onClick={handleFinish}>
            Finish
          </Button>
        </Stack>
      </Stack>

      <Box>
        <Typography variant="h5">Select Order Items</Typography>
        <CategoriesProvider>
          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap-reverse"
            justifyContent="flex-end"
            sx={{ mb: 5 }}
          >
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
              <ProductFilters
                openFilter={openFilter}
                onOpenFilter={handleOpenFilter}
                onCloseFilter={handleCloseFilter}
                onFilterChange={handleFilterChange}
              />
            </Stack>
          </Stack>

          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid key={product.id} xs={6} sm={3} md={3} lg={2}>
                <ProductCard
                  product={product}
                  isSelected={selectedItems[product.id] !== undefined}
                  onSelect={handleSelectItem}
                  onQuantityChange={handleQuantityChange}                  
                />
              </Grid>
            ))}
          </Grid>
        </CategoriesProvider>
      </Box>
      <OrderSummary
        open={dialogOpen}
        onClose={handleDialogClose}
        selectedItems={selectedItems}
        products={products}
        tableName={selectedTable}
      />
    </Container>
  );
}

Step2.propTypes = {
  onFinish: PropTypes.func.isRequired,
  selectedTable:PropTypes.string,
};
