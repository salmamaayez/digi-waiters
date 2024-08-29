import { lazy, Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const Step1Page = lazy(() => import('src/pages/step1'));
export const Step2Page = lazy(() => import('src/pages/step2'));
export const NewOrderProcess = lazy(() => import('src/pages/NewOrderProcess'));
export const CurrentOrdersPage = lazy(() => import('src/pages/CurrentOrdersPage'));
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'order', element: <IndexPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'step1', element: <NewOrderProcess />  },
        { path: 'step2', element: <NewOrderProcess /> },
        { path: 'current-orders', element: <CurrentOrdersPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
  ]);

  return routes;
}
