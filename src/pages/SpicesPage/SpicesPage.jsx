import React, { Fragment } from "react";

import SpicesAPI from '../../api/SpicesApi'
import SpicesList from "../../Component/Spices/SpicesList";
const HerbsPage = () => {
  const spicesProducts = SpicesAPI;
  return (
    <Fragment>
      <SpicesList products={spicesProducts} />
    </Fragment>
  );
};
export default HerbsPage;
