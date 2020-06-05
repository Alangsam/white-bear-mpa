import React from "react";
import editLogo from "../../icons/edit.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function AllCards() {
   return (
      <AppTemplate>
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
               class="form-control border-primary d-inline-block float-right w-50 pt-0 "
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
               <Link to="/edit" class="btn btn-link">
                  <img src={editLogo} width="20px" alt="edit-button" />
                  Edit
               </Link>
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
               <Link to="/edit" class="btn btn-link">
                  <img src={editLogo} width="20px" alt="edit-button" />
                  Edit
               </Link>
            </div>
         </div>
      </AppTemplate>
   );
}
