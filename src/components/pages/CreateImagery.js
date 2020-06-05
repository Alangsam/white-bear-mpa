import React from "react";
import saveIcon from "../../icons/save.svg";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

export default function CreateImagery() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <div class="">
            <h4 class="text-center pt-2 text-muted">Add memorable imagery</h4>
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
      </AppTemplate>
   );
}
