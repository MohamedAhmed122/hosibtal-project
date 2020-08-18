import React, { Fragment } from "react";

import HerbsAPI from '../../api/HerbsApi'
import HerbsList from "../../Component/Herbs/HerbsList";
const HerbsPage = () => {
  const herbsProducts = HerbsAPI;
  return (
    <Fragment>
      <HerbsList products={herbsProducts} />
    </Fragment>
  );
};
export default HerbsPage;
