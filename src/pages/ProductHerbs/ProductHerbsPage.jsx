import React, { Fragment } from "react";

import Data from "../../api/SampleData";
import HerbsList from "../../Component/Product-Herbs-List/Product-Herbs-List";
const HerbsPage = () => {
  const products = Data;
  return (
    <Fragment>
      <HerbsList products={products} />
    </Fragment>
  );
};
export default HerbsPage;
