import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import { memoryCards } from "../../mock-data/memory-cards.js";

const memoryCard = memoryCards[1];

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         <div className="py-4">
            <div id="tukhtgrredwefw" className="card bg-primary text-light">
               <div className="card-body">
                  <div>{memoryCard.imagery}</div>
               </div>
            </div>
            <div id="wfwgtgewdqwd" className="card bg-secondary text-light">
               <div className="card-body">
                  <div>{memoryCard.answer}</div>
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
               <Link to="/review-imagery" className="btn  btn-secondary">
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
