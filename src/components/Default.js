import React, { Component } from 'react'

export default class Default extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                  <div className="display-4"> 404</div>
                  <div className="display-4">error</div>
                  <div>page not found</div>
               </div>
            </div>
         </div>
      )
   }
}
