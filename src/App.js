import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Basket from "./components/Basket/Basket";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ProductsContainer from "./components/Products/ProductsContainer";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products'>
            <ProductsContainer />
          </Route>
          <Route path='/basket'>
            <Basket />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
