import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./Pages/home/Home";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./Pages/userList/UserList";
import User from "./Pages/user/User";
import NewUser from "./Pages/newUser/NewUser";
import ProductList from "./Pages/productList/ProductList";
import Product from "./Pages/product/Product";
import NewProduct from "./Pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/user/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
