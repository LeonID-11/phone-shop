import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from "./Button";

export default class Details extends Component {
   render() {
      return (
         <ProductConsumer>
         {(value)=>{
            const { id,title,img,price,company,info,inCart } = value.detailProduct;
            return(
               <div className="container py-5">
                  <div className="row">
                     <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                     <h1>{title}</h1>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-10 col-md-6 my-3">
                     <img src={img} alt={title} className="img-fluid"/> 
                     </div>
                     <div className="col-10 col-md-6 text-capitalize my-3">
                        <h2>model: {title}</h2>
                        <h4 className="text-title text-uppercase text-muted mb-3 mt-3">made by {company}</h4>
                        <h4 className="text-blue">
                           <strong>
                              price: $&nbsp;{price}
                           </strong>
                        </h4>
                        <p className="text-capitalize mt-3 mb-0 font-weight-bold">
                           info about product:
                        </p>
                        <p className="text-muted lead">{info}</p>
                        <div>
                           <Link to="/">
                              <ButtonContainer>
                              to home page
                              </ButtonContainer>
                           </Link>
                           <ButtonContainer 
                              cart className="cart-btn" 
                              disabled={inCart} 
                              onClick = { ()=>{
                              value.addToCart(id);
                              value.openModal(id);
                              }}
                           >
                              {inCart  
                                 ? "in cart" 
                                 : "add to cart"
                              }
                           </ButtonContainer>
                        </div>
                     </div>
                  </div>
               </div>
            )
         }}
         </ProductConsumer>
      )
   }
}
