import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { fCurrency } from 'src/utils/format-number';

export default function ShopProductCard({ product, isSelected, onSelect, onQuantityChange }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!isSelected) {
      setQuantity(1); // Réinitialiser la quantité si le produit est désélectionné
    }
  }, [isSelected]);

  const handleCheckboxChange = () => {
    if (isSelected) {
      onSelect(product.id, false);
    } else {
      onSelect(product.id, true);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(product.id, newQuantity);
  };

  const handleDecrease = () => {
    const newQuantity = quantity - 1;
    if (newQuantity === 0) {
      onSelect(product.id, false);
    } else {
      setQuantity(newQuantity);
      onQuantityChange(product.id, newQuantity);
    }
  };

  const renderQuantitySelector = () => (
    <Stack 
      direction="row" 
      alignItems="center" 
      justifyContent="center"
      spacing={0.5} 
      sx={{
        mt: 0.5,
        border: '1px solid #D0D0D0',
        borderRadius: '4px',
        padding: '2px 4px',
        backgroundColor: '#F4F4F4',
      }}
    >
      <Button 
        size="small" 
        onClick={handleDecrease} 
        disabled={quantity === 1}
        sx={{
          minWidth: '24px',
          height: '24px',
          borderRadius: '4px',
          backgroundColor: '#E0E0E0',
          color: '#333',
          fontSize: '12px',
          '&:hover': {
            backgroundColor: '#C0C0C0',
          },
          '&:disabled': {
            backgroundColor: '#F0F0F0',
            color: '#B0B0B0',
          },
        }}
      >
        -
      </Button>
      <Typography 
        variant="body2"
        sx={{
          minWidth: '20px',
          textAlign: 'center',
          color: '#333',
          fontSize: '14px',
        }}
      >
        {quantity}
      </Typography>
      <Button 
        size="small" 
        onClick={handleIncrease}
        sx={{
          minWidth: '24px',
          height: '24px',
          borderRadius: '4px',
          backgroundColor: '#E0E0E0',
          color: '#333',
          fontSize: '12px',
          '&:hover': {
            backgroundColor: '#C0C0C0',
          },
        }}
      >
        +
      </Button>
    </Stack>
  );

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.cover}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderPrice = () => (
    <Box>
      <Typography variant="body2">{fCurrency(product.price)}</Typography>
      {isSelected && renderQuantitySelector()}
    </Box>
  );

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>{renderImg}</Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {product.name}
        </Link>
        <Typography variant="caption" color="text.secondary">
          {product.category}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={0}
          sx={{ width: '100%' }}
        >
          {renderPrice()}
          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
            <Tooltip title={isSelected ? "Deselect Item" : "Select Item"}>
              <IconButton
                onClick={handleCheckboxChange}
                sx={{
                  p: 2,
                  width: '24px',
                  height: '24px',
                }}
              >
                <Checkbox
                  checked={isSelected}
                  sx={{
                    width: '24px',
                    height: '24px',
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};
