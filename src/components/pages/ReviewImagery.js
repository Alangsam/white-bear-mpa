import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import { memoryCards } from "../../mock-data/memory-cards.js";

const memoryCard = memoryCards[1];

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <div className=" mx-auto pt-4">
            <div id="the-bottom-card" className="card bg-primary text-light">
               <div className="card-body">
                  <div>{memoryCard.imagery}</div>
               </div>
            </div>
         </div>
         <div className="pt-6">
            <div className="col-6 d-inline pt-4 pl-0">
               <Link to="/review-answer" className="btn btn-link">
                  previous card
               </Link>
            </div>
            <div className="col-6 d-inline pt-4">
               <Link
                  to="/review-answer"
                  id="show-the-answer"
                  className="float-right btn btn-outline-primary "
               >
                  Show answer
               </Link>
            </div>
         </div>
      </AppTemplate>
   );
}
