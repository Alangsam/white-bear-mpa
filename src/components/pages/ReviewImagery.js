import React from "react";

import Header from "../ui/Header";

export default function ReviewImagery() {
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
                  <a href="create-answer.html" class="btn btn-primary">
                     Create New
                  </a>
                  <button class="btn btn-primary tab-seperator tab-active">
                     Review
                  </button>
                  <a
                     href="all-cards.html"
                     class="btn btn-primary tab-seperator"
                  >
                     All Cards
                  </a>
               </div>
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
                     <button class="btn btn-link">previous card</button>
                  </div>
                  <div class="col-6 d-inline pt-4">
                     <button
                        id="show-the-answer"
                        class="float-right btn btn-outline-primary "
                     >
                        Show answer
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
