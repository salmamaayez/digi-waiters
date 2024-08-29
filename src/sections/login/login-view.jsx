import { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    router.push('/order');
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

  
      <LoadingButton direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 4 }}
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        Login
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          mt:3,
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: '90vh' }}>
        <Card
          sx={{
      p: { xs: 2, sm: 4, md: 6 }, // Padding qui s'adapte aux différentes tailles d'écran
      width: '100%',
      maxWidth: { xs: 300, sm: 400, md: 550 }, // Largeur maximale qui varie selon la taille de l'écran
      boxShadow: 3, // Pour ajouter un peu de profondeur
    }}
        >
          <Typography variant="h4">Sign in to Digi Waiters</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            welcome to Digi Waiters!
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              Get started
            </Link>
          </Typography>


          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
