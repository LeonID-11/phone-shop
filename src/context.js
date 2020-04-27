import React, { Component, createContext } from 'react'
import {storeProducts, detailProduct} from "./data";

const ProductContext = createContext()

class ProductProvider extends Component {
    state={
        storeProducts: [],
        detailProduct,
        cart:[],
        modalOpen: false,
        modalProduct: detailProduct,
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

    getItem = id =>{
        const product = this.state.storeProducts.find(item => item.id === id);
        return product;
    }
    handelDetails = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct: product}
        })
    }
    addToCart = id => {
        let tempProducts = [...this.state.storeProducts]
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=> {
            return{storeProducts: tempProducts, cart: [...this.state.cart, product]}
        }, ()=>{
            console.log(this.state);
        })
    }
    openModal = id=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return{modalProduct: product, modalOpen: true}
        })
    }
    closeModal = () => {
        this.setState(()=>{
            return{modalOpen: false}
        })
    }
    render() {
        return (
            <ProductContext.Provider 
                value={{
                    ...this.state,
                    handelDetail: this.handelDetails,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}