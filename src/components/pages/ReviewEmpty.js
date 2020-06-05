import React from "react";
import Header from "../ui/Header";

export default function ReviewEmpty() {
   return (
      <div class="container">
         <div class="row">
            <div class="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <Header />
               <div
                  class="d-flex btn-group px-0"
                  role="group"
                  aria-label="navigation"
               >
                  <button class="btn btn-primary">Create New</button>
                  <button class="btn btn-primary tab-seperator">Review</button>
                  <button class="btn btn-primary tab-seperator">
                     All Cards
                  </button>
               </div>
               <div class="text-center pt-4">
                  <div>
                     <h4>Out of cards</h4>
                  </div>
               </div>
               <div class="">
                  <div class="col-6 d-inline pt-3 pl-0">
                     <button class="btn btn-link">previous card</button>
                  </div>
                  <div class="col-6 d-inline pt-4 ">
                     <button class="float-right btn btn-sm btn-outline-primary">
                        Get more cards
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
