import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'order',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'menu',
    path: '/products',
    icon: icon('ic_cart'),
  },
    
];

export default navConfig;
