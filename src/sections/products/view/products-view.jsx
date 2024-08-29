import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import {products} from 'src/_mock/products';

import ProductCard from '../product-card';
import ProductFilters from '../product-filters';
import { CategoriesProvider } from '../CategoriesContext';


// ----------------------------------------------------------------------

export default function ProductsView() {
  const [openFilter, setOpenFilter] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('All');

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
 
 
  const filteredProducts = products.filter(
    (product) => categoryFilter === 'All' || product.category === categoryFilter
  );

  return (
    <CategoriesProvider>
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Menu</Typography>
      </Stack>

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
            />
          </Grid>
        ))}
      </Grid>
    </Container>
    </CategoriesProvider>
  );
}
