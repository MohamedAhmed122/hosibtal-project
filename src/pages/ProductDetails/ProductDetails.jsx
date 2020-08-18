import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import Products from "../../api/SampleData";
import Info from "../../Component/ProductDetails/Info";
import Header from "../../Component/ProductDetails/HeaderBar";

const ProductDetail = ({ match }) => {
  const ProductsDetail = Products.find(
    (Product) => Product.id === match.params.id
  );
  return (
    <Fragment>
      <Grid container>
        <Grid item lg={3}></Grid>
        <Grid item lg={6}>
          <Header Product={ProductsDetail}/>
          <Info Product={ProductsDetail} />
        </Grid>
        <Grid item lg={3}></Grid>
      </Grid>
    </Fragment>
  );
};
export default ProductDetail;
