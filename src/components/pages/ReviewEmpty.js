import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <div class="text-center pt-4">
            <div>
               <h4>Out of cards</h4>
            </div>
         </div>
         <div class="">
            <div class="col-6 d-inline pt-3 pl-0">
               <Link to="/review-answer" class="btn btn-link">
                  previous card
               </Link>
            </div>
            <div class="col-6 d-inline pt-4 ">
               <Link
                  to="/review-imagery"
                  class="float-right btn btn-sm btn-outline-primary"
               >
                  Get more cards
               </Link>
            </div>
         </div>
      </AppTemplate>
   );
}
