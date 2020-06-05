import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function CreateAnswer() {
   return (
      <AppTemplate>
         <div
            className="bg-success py-4 container-fluid text-white text-center fixed-top"
            hidden
         >
            <img src="style/success.svg" width="32" alt="success" />
            <span className="pl-3 align-middle">Card Created!</span>
         </div>
         <div className=" py-4">
            <div className="card bg-primary">
               <form className="card-body">
                  <textarea
                     id="addanswertext"
                     className="w-100"
                     rows="9"
                  ></textarea>
               </form>
            </div>
         </div>
         <div className="character-counter">
            <p className="float-right">/240</p>
            <p id="textcountleft" className="float-right"></p>
         </div>
         <div className="clearfix"></div>
         <Link
            to="/create-imagery"
            id="next-go-to-imagery-btn"
            className="float-right btn btn-lg btn-outline-secondary"
            disabled="true"
         >
            Next
         </Link>
      </AppTemplate>
   );
}
