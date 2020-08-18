import React from "react";
import theme from "./theme/theme";

import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import Navbar from "./layout/navbar/navbar";
import Footer from "./layout/footer/footer";
import {Switch, Route} from 'react-router-dom'
import HerbsPage from './pages/ProductHerbs/ProductHerbsPage'
import HomePage from './pages/Home/HomePage'


function App() {
 
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Switch>
        <Route exact path='/' component={HomePage} /> 
          <Route exact path='/products' component={HerbsPage} /> 
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
