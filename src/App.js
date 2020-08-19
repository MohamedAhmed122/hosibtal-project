import React from "react";
import theme from "./theme/theme";

import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import Navbar from "./layout/navbar/navbar";
import Footer from "./layout/footer/footer";
import { Switch, Route } from "react-router-dom";
import HerbsPage from "./pages/HerbsPage/HerbsPage";
import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import SpicesPage from "./pages/SpicesPage/SpicesPage";
import SecondaryProducts from "./pages/SecondaryProductPage/SecondaryPoductPage";
import SeedsPage from "./pages/SeedsPage/SeedsPage";
import ProductDetail from "./pages/ProductDetails/ProductDetails";
import ContactPage from './pages/contactPage/contactPage'
import AboutPage from "./pages/AboutPage/aboutPage";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/herbs" component={HerbsPage} />
          <Route exact path="/products" component={ProductPage} />
          <Route exact path="/spices" component={SpicesPage} />
          <Route exact path="/specialProduct" component={SecondaryProducts} />
          <Route exact path="/seeds" component={SeedsPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/about" component={AboutPage} />
          

          <Route path={"/specialProduct/:id"} component={ProductDetail} />
          <Route path={"/seeds/:id"} component={ProductDetail} />
          <Route path={"/spices/:id"} component={ProductDetail} />
          <Route path={"/herbs/:id"} component={ProductDetail} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
