import Cart from "components/Cart";
import { PageNotFound } from "components/commons";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "routes";

import Product from "./components/Product";
import ProductList from "./components/ProductList";

const App = () => (
  <Switch>
    <Route exact component={Product} path={routes.products.show} />
    <Route exact component={ProductList} path={routes.products.index} />
    <Redirect exact from={routes.root} to={routes.products.index} />
    <Route exact component={Cart} path={routes.cart} />
    <Route component={PageNotFound} path="*" />
  </Switch>
);

export default App;
