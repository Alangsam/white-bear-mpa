import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewAnswer() {
   return (
      <AppTemplate>
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
            <Link to="/edit" className="btn btn-link">
               Edit card
            </Link>
            <div className="float-right">
               <Link
                  to="/review-empty"
                  className="btn btn-outline-secondary mr-4"
               >
                  Needs work
               </Link>
               <Link to="/review-answer" className="btn  btn-secondary">
                  <img
                     src={thumbsUpIcon}
                     className="mt-n3"
                     style={{ width: "28px" }}
                     alt=""
                  />
                  Got it
               </Link>
            </div>
         </div>
      </AppTemplate>
   );
}
