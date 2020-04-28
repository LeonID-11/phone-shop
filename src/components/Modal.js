import React, { Component } from 'react';
import {ProductConsumer} from "../context";
import {ButtonContainer} from "./Button";
import styled from "styled-components";
import {Link} from 'react-router-dom';


export default class Modal extends Component {
   render() {
      return (
         <ProductConsumer>
            {value=>{
               const {modalOpen, closeModal} = value;
               const {img,title,price} = value.modalProduct;

               if(modalOpen){
                  return(
                     <ModalContainer>
                        <div className="container">
                           <div className="row">
                              <div className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center modal-item p-3">
                                 <h5>{title}</h5>
                                 <img src={img} alt={title} className="img-fluid" /> 
                                 <p className="my-0 text-muted">price: $&nbsp;{price}</p>
                                 <Link to="/">
                                    <ButtonContainer onClick={closeModal}>
                                       store
                                    </ButtonContainer>
                                 </Link>
                                 <Link to="/cart">
                                    <ButtonContainer 
                                       cart 
                                       onClick={()=>{ return closeModal()}}
                                    >
                                       go to cart
                                    </ButtonContainer>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </ModalContainer>
                  )
               }else{
                  return null;
               }
            }}
         </ProductConsumer>
      )
   }
}

const ModalContainer = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(0, 0, 0, 0.3);
   display: flex;
   align-items: center;
   justify-content: center;
   .modal-item {
      background: var(--mainWhite);
   }
`;