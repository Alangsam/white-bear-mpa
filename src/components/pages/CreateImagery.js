import React from "react";
import appLogo from "../../icons/logo-app.svg";
import saveIcon from "../../icons/save.svg";

export default function CreateImagery() {
   return (
      <div class="container">
         <div class="row">
            <div class="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1 ">
               <img
                  class="d-inline"
                  src={appLogo}
                  width="32px"
                  alt="app-logo"
               />
               <h3 class="d-inline text-brand">White Bear</h3>
               <a href="index.html" class="btn btn-link float-right">
                  Log out
               </a>
               <div
                  class="d-flex btn-group "
                  role="group"
                  aria-label="navigation"
               >
                  <button class="btn btn-primary tab-active">Create New</button>
                  <a
                     href="review-imagery.html"
                     class="btn btn-primary tab-seperator"
                  >
                     Review
                  </a>
                  <a
                     href="all-cards.html"
                     class="btn btn-primary tab-seperator"
                  >
                     All Cards
                  </a>
               </div>
               <div class="">
                  <h4 class="text-center pt-2 text-muted">
                     Add memorable imagery
                  </h4>
                  <div class="card bg-primary">
                     <form class="card-body text-center">
                        <textarea
                           id="addanswertext"
                           maxlength="240"
                           class=""
                           rows="9"
                           readonly
                        ></textarea>
                     </form>
                  </div>
                  <div class="card bg-secondary">
                     <div class="">
                        <form class="card-body text-center">
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
               <div class="col-11">
                  <p class="float-right">/240</p>
                  <p id="textcountright" class="float-right"></p>
               </div>
               <div class="clearfix"></div>
               <div class="">
                  <a href="create-answer.html" class="btn btn-link">
                     Back to answer
                  </a>
                  <button
                     href=""
                     id="the-save-button-create"
                     class="float-right btn btn-lg btn-secondary "
                  >
                     <div class="">
                        <img
                           src={saveIcon}
                           class=""
                           style={{ width: "22px" }}
                           alt="save-logo"
                        />
                        Save
                     </div>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
