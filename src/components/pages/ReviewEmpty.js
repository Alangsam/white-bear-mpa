import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
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
      </AppTemplate>
   );
}
