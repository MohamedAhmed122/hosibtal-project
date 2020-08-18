import React, { Fragment } from "react";

import SeedsAPI from '../../api/SeedsApi'
import SeedsList from "../../Component/Seeds/SeedsList";
const SeedsPage = () => {
  const seedsProducts = SeedsAPI;
  return (
    <Fragment>
      <SeedsList products={seedsProducts} />
    </Fragment>
  );
};
export default SeedsPage;
