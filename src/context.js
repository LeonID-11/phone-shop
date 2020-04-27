import React, { Component, createContext } from 'react'
import {storeProducts, detailProduct} from "./data";

const ProductContext = createContext()

class ProductProvider extends Component {
    state={
        storeProducts: [],
        detailProduct,
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts = () =>{
        let products = [];
        storeProducts.forEach(item=>{
            let singleItem = {...item};
            products = [...products, singleItem];
        });
        this.setState(()=> {
            return{storeProducts: products}
        })
    }
    handelDetails = ()=>{

    }
    addToCart = (id) => {
        console.log(id);
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handelDetail: this.handelDetails,
                addToCart: this.addToCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}