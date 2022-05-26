import React from "react"
import { Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CreateProduct from "./components/CreateProduct/CreateProduct"

function App() {
  return (
    <div>
    <Nav />
    <Route exact path="/" component={Home} />
    <Route path="/product/:id" component={ProductDetail}/>
    <Route path="/products/create" component={CreateProduct}/>
    </div>
    )
}
export default App;
