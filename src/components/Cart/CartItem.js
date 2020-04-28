import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faTrash);

export default function CartItem({item, value}) {
   const {id, title, img, price, count, total} = item;
   const {increment, decrement, removeItem} = value;
   return (
      <div className="row my-1 text-capitalize text-center ">
         <div className="col-10 mx-auto col-lg-2">
            <img 
               src={img} 
               alt={title} 
               className="img-fluid" 
               style={{width:"5rem"}}
            />
         </div>
         <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">Product:</span> {title}
         </div>
         <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">Price:</span> ${price}
         </div>
         <div className="col-10 mx-auto col-lg-2">
            <div className="d-flex-justify-content-center">
               <div className="btn btn-black mr-1" onClick={decrement.bind(null, id)}>-</div>
               <div className="btn btn-black">{count}</div>
               <div className="btn btn-black ml-1" onClick={increment.bind(null, id)}>+</div>
            </div>
         </div>
         <div className="col-10 mx-auto col-lg-2" onClick={removeItem.bind(null, id)}>
            <div className="cart-icon">
               <FontAwesomeIcon icon={faTrash} />
            </div>
         </div>
         <div className="col-10 mx-auto col-lg-2">
            <strong>${total}</strong>
         </div>
      </div>
   )
}
