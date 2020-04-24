import React, {Component} from 'react';
import Product from './Product'

export default class ProductList extends Component {

  render(){
    return (
      <div className="container">
        <Product></Product>
      </div>
    );
  }
}