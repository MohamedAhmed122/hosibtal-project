import React from "react";
import theme from "./theme/theme";

import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import Navbar from "./layout/navbar/navbar";
import Footer from "./layout/footer/footer";
import {Switch, Route} from 'react-router-dom'
import HospitalPage from './pages/hospital/hospitalPage'
import ProductOverview from "./Component/ProductOverView/ProductOverview";



function App() {
 
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductOverview} /> 
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
