import React, { Fragment } from "react";

import SecondaryAPI from '../../api/SecondaryProduct'
import SpecialList from "../../Component/SecondaryProduct/SP-List";
const ProductPage = () => {
  const SecondaryProducts = SecondaryAPI;
  return (
    <Fragment>
      <SpecialList products={SecondaryProducts} />
    </Fragment>
  );
};
export default ProductPage;
