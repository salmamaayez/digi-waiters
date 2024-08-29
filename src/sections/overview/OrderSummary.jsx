import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Grid,
  Dialog,
  Button,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

import { fCurrency } from 'src/utils/format-number';

export default function OrderSummary({ open, onClose, selectedItems, products, tableName }) {
  const navigate = useNavigate();

  const calculateTotal = () =>
    Object.keys(selectedItems).reduce((total, id) => {
      const product = products.find((p) => p.id === id);
      return total + product.price * selectedItems[id].quantity;
    }, 0);

  const handleSendToKitchen = () => {
    console.log('sent with success');
    const newOrder = {
      tableName,
      items: Object.keys(selectedItems).map((id) => {
        const product = products.find((p) => p.id === id);
        return {
          name: product.name,
          quantity: selectedItems[id].quantity,
          price: product.price * selectedItems[id].quantity,
        };
      }),
      total: calculateTotal(),
    };

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    navigate('/');
  };
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.storageArea === localStorage && event.key === 'orders') {
        // Réagir aux changements si nécessaire (non requis ici pour waiter)
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e0e0e0' }}>
        <Typography fontWeight="bold" color="#333">
          {tableName}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ padding: { xs: 1, sm: 2 } }}>
          <Grid container spacing={1} sx={{ borderBottom: '1px solid #e0e0e0', pb: 1, mb: 2 }}>
            <Grid item xs={6}>
              <Typography variant="subtitle2" fontWeight="bold">
                Item
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle2" textAlign="center" fontWeight="bold">
                Quantity
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle2" textAlign="center" fontWeight="bold">
                Price
              </Typography>
            </Grid>
          </Grid>
          {Object.keys(selectedItems).map((id) => {
            const product = products.find((p) => p.id === id);
            const { quantity } = selectedItems[id];
            return (
              <Grid
                container
                spacing={1}
                key={id}
                sx={{ borderBottom: '1px solid #e0e0e0', py: 1, alignItems: 'center' }}
              >
                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    component="img"
                    src={product.cover}
                    alt={product.name}
                    sx={{
                      width: { xs: 50, sm: 60 },
                      height: { xs: 50, sm: 60 },
                      objectFit: 'cover',
                      mr: 1,
                      borderRadius: '8px',
                      border: '1px solid #e0e0e0',
                    }}
                  />
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    {product.name}
                  </Typography>
                </Grid>
                <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    variant="body2"
                    sx={{ textAlign: 'center', width: '100%', color: '#555' }}
                  >
                    {quantity}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
                >
                  <Typography variant="body2" sx={{ color: '#333' }}>
                    {fCurrency(product.price * quantity)}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
          <Grid
            container
            spacing={1}
            sx={{ mt: 2, borderTop: '1px solid #e0e0e0', pt: 1, alignItems: 'center' }}
          >
            <Grid item xs={9}>
              <Typography variant="h6" fontWeight="bold" sx={{ color: '#333' }}>
                Total
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
            >
              <Typography variant="h6" sx={{ color: '#333' }}>
                {fCurrency(calculateTotal())}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions sx={{ borderTop: '1px solid #e0e0e0', p: 1 }}>
        <Button
          onClick={onClose}
          variant="contained"
          color="primary"
          sx={{ borderRadius: '8px', fontSize: { xs: '0.75rem', sm: '1rem' } }}
        >
          Close
        </Button>
        <Button
          onClick={handleSendToKitchen}
          variant="contained"
          color="secondary"
          sx={{ borderRadius: '8px', fontSize: { xs: '0.75rem', sm: '1rem' } }}
        >
          Send to Kitchen
        </Button>
      </DialogActions>
    </Dialog>
  );
}

OrderSummary.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedItems: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  tableName: PropTypes.string,
};
