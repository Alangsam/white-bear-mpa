import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <div class=" mx-auto pt-4">
            <div id="the-top-card" class="card bg-primary">
               <form class="card-body text-center">
                  <textarea
                     id="addanswertext"
                     maxlength="240"
                     class=""
                     rows="9"
                  ></textarea>
               </form>
            </div>
            <div id="the-bottom-card" class="card bg-secondary">
               <div class="card-body">
                  <form>
                     <textarea
                        id="editimage"
                        maxlength="240"
                        class=""
                        rows="5"
                     ></textarea>
                  </form>
               </div>
            </div>
         </div>
         <div class="pt-6">
            <div class="col-6 d-inline pt-4 pl-0">
               <Link to="/review-answer" class="btn btn-link">
                  previous card
               </Link>
            </div>
            <div class="col-6 d-inline pt-4">
               <Link
                  to="/review-answer"
                  id="show-the-answer"
                  class="float-right btn btn-outline-primary "
               >
                  Show answer
               </Link>
            </div>
         </div>
      </AppTemplate>
   );
}
