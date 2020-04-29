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
      cartSubtotal: 0,
      cartTax: 0,
      cartTotal: 0,
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
         this.addTotal();
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
   increment = id=>{
      let tempCart = [...this.state.cart];
      const selectedProduct = tempCart.find(item=>item.id === id);
      const index = tempCart.indexOf(selectedProduct);
      const product = tempCart[index];
      product.count++;
      product.total = product.count*product.price;
      this.setState(()=>{
         return {cart: [...tempCart]}
      },()=>{
         this.addTotal();
      })
   }
   decrement = id=>{
      let tempCart = [...this.state.cart];
      const selectedProduct = tempCart.find(item=>item.id === id);
      const index = tempCart.indexOf(selectedProduct);
      const product = tempCart[index];
      if( product.count === 1){
         return false;
      }
      product.count--;
      product.total = product.count*product.price;
      this.setState(()=>{
         return {cart: [...tempCart]}
      },()=>{
         this.addTotal();
      })
      
   }
   removeItem = (id) =>{
      let tempProduct = [...this.state.storeProducts];
      let tempCart = [...this.state.cart];

      tempCart = tempCart.filter((item)=>item.id !== id);

      const index = tempProduct.indexOf(this.getItem(id));
      let removeProduct = tempProduct[index];
      removeProduct.inCart = false;
      removeProduct.count = 0;
      removeProduct.total = 0;
      this.setState(()=>{
         return{
            cart:[...tempCart],
            product: [...tempProduct],
         }
      },()=>{
         this.addTotal()
      })

   }
   clearCart = ()=>{
      this.setState(()=>{
         return{cart: [],}
      },()=>{
         this.setProducts();
         this.addTotal();
      })
   }
   addTotal = () =>{
      let subTotal = 0;
      this.state.cart.map((item)=>subTotal += item.total);
      const tempTax = subTotal*0.2;
      const tax = parseFloat(tempTax.toFixed(2));
      const total = subTotal + tax;
      this.setState(()=>{
         return{
            cartSubtotal: subTotal,
            cartTax: tax,
            cartTotal: total
         }
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
               increment: this.increment,
               decrement: this.decrement,
               removeItem: this.removeItem,
               clearCart: this.clearCart,
            }}
         >
            {this.props.children}
         </ProductContext.Provider>
      )
   }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}