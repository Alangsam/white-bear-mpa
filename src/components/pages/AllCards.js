import React from "react";
import editLogo from "../../icons/edit.svg";
import Header from "../ui/Header";
import AppTemplate from "../ui/AppTemplate";
import Navigation from "../ui/Navigation";

export default function AllCards() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
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
            <select id="sort" class="custom-select border-primary float-right">
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
      </AppTemplate>
   );
}
