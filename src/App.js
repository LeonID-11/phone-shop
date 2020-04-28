import React, {Component, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render(){
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route path="/" component={ProductList} exact />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </Fragment>
    );
  }
}

export default App;
