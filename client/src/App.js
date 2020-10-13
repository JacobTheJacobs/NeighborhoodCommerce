import React from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import { Route, Switch } from "react-router-dom";
import ProductDetails from "./components/products/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" exact component={ProductDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
