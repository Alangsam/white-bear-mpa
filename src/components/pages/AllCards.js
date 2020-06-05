import React from "react";
import appLogo from "../../icons/logo-app.svg";
import editLogo from "../../icons/edit.svg";

export default function AllCards() {
   return (
      <div class="container">
         <div class="row">
            <div class="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
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
                  class="d-flex btn-group px-0"
                  role="group"
                  aria-label="navigation"
               >
                  <a href="create-answer.html" class="btn btn-primary">
                     Create New
                  </a>
                  <a
                     href="review-imagery.html"
                     class="btn btn-primary tab-seperator"
                  >
                     Review
                  </a>
                  <button class="btn btn-primary tab-seperator tab-active">
                     All Cards
                  </button>
               </div>
               <div class="pt-4">
                  <nav class="navbar">
                     <form class="form-inline">
                        <input
                           id="search-this-box"
                           class="form-control mr-2 border-primary"
                           type="search"
                           placeholder="Search"
                           aria-label="Search"
                        />
                        <button
                           id="use-this-btn-to-search"
                           class="btn btn-sm bg-primary text-white"
                           type="button"
                        >
                           Search
                        </button>
                     </form>
                  </nav>
               </div>
               <div class="pt-4 px-0">
                  <p class="d-inline-block">search cards by</p>
                  <select
                     id="sort"
                     class="custom-select border-primary float-right"
                  >
                     <option class="" selected>
                        Most recent
                     </option>
                  </select>
               </div>

               <div class="py-4">
                  <div class="d-inline-block">
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
                        <div class="card-body">
                           <form>
                              <textarea
                                 id="editimage"
                                 maxlength="240"
                                 class=""
                                 rows="5"
                                 readonly
                              ></textarea>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div class="d-inline align-top">
                     <a href="edit.html" class="btn btn-link">
                        <img src={editLogo} width="20px" alt="edit-button" />
                        Edit
                     </a>
                  </div>
               </div>

               <div class="py-4">
                  <div class="d-inline-block">
                     <div class="card bg-primary">
                        <form class="card-body text-center">
                           <textarea
                              id="addanswertext-second"
                              maxlength="240"
                              class=""
                              rows="9"
                              readonly
                           ></textarea>
                        </form>
                     </div>
                     <div class="card bg-secondary">
                        <div class="card-body">
                           <form>
                              <textarea
                                 id="editimage-second"
                                 maxlength="240"
                                 class=""
                                 rows="5"
                                 readonly
                              ></textarea>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div class="d-inline align-top">
                     <a href="edit.html" class="btn btn-link">
                        <img src={editLogo} width="20px" alt="edit-button" />
                        Edit
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
