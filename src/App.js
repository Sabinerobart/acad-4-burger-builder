import React from "react";
import { Route, Switch } from 'react-router-dom';

import "./App.css";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path='/' component={BurgerBuilder} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
