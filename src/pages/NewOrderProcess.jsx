import { Helmet } from 'react-helmet-async';

import NewOrderProcess from 'src/sections/overview/NewOrderProcess';

// ----------------------------------------------------------------------

export default function OrderPage() {
  return (
    <>
      <Helmet>
        <title> DG Restaurant </title>
      </Helmet>

      <NewOrderProcess />
    </>
  );
}