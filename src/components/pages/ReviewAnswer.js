import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <div className="py-4">
            <div className="card bg-primary">
               <form className="card-body">
                  <textarea
                     id="addanswertext"
                     maxlength="240"
                     className=""
                     rows="9"
                     readonly
                  ></textarea>
               </form>
            </div>
            <div className="card bg-secondary">
               <div className="card-body">
                  <form>
                     <textarea
                        id="editimage"
                        maxlength="240"
                        className=""
                        rows="5"
                        readonly
                     ></textarea>
                  </form>
               </div>
            </div>
         </div>
         <div className=" mx-auto ">
            <button className="btn btn-link">Edit card</button>
            <div className="float-right">
               <button className="btn btn-outline-secondary mr-4">
                  Needs work
               </button>
               <button className="btn  btn-secondary">
                  <img
                     src={thumbsUpIcon}
                     className="mt-n3"
                     style={{ width: "28px" }}
                     alt=""
                  />
                  Got it
               </button>
            </div>
         </div>
      </AppTemplate>
   );
}
