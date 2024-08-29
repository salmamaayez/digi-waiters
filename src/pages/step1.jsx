import { Helmet } from 'react-helmet-async';

import Step1 from 'src/sections/overview/view/step1';

// ----------------------------------------------------------------------

export default function Step1Page() {
  return (
    <>
      <Helmet>
        <title> DG Restaurant </title>
      </Helmet>

      <Step1 />
    </>
  );
}