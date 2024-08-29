import { Helmet } from 'react-helmet-async';

import Step2 from 'src/sections/overview/view/step2';

// ----------------------------------------------------------------------

export default function Step2Page() {
  return (
    <>
      <Helmet>
        <title> DG Restaurant </title>
      </Helmet>

      <Step2 />
    </>
  );
}