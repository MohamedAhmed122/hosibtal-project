import React, { Fragment } from "react";

import HerbsAPI from '../../api/HerbsApi'
import HerbsList from "../../Component/Herbs/HerbsList";
const ProductPage = () => {
  const herbsProducts = HerbsAPI;
  return (
    <Fragment>
      <HerbsList products={herbsProducts} />
    </Fragment>
  );
};
export default ProductPage;
