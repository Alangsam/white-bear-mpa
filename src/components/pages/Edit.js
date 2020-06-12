import React from "react";
import saveLogo from "../../icons/save.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import { memoryCards } from "../../mock-data/memory-cards.js";
import toDisplayableDate from "date-fns/format";

const memoryCard = memoryCards[1];

export default function Edit() {
   return (
      <AppTemplate>
         <div className=" mx-auto">
            <h4 className="text-center pt-2">Edit card</h4>
            <div className="card bg-primary">
               <form className="card-body">
                  <textarea
                     id="addanswertext"
                     maxLength="240"
                     className="w-100"
                     rows="9"
                     defaultValue={memoryCard.imagery}
                  ></textarea>
               </form>
            </div>
            <div className="card bg-secondary">
               <div className="card-body">
                  <form>
                     <textarea
                        id="editimage"
                        maxLength="240"
                        className="w-100"
                        rows="5"
                        defaultValue={memoryCard.answer}
                     ></textarea>
                  </form>
               </div>
            </div>
         </div>
         <div className="">
            <p className="float-right">/240</p>
            <p id="textcountleft" className="float-right"></p>

            <p id="textcountright" className="float-left"></p>
            <p className="float-left">/240</p>
         </div>
         <div className="clearfix"></div>
         <div className="">
            <Link
               to="/all-cards"
               id="discard-the-changes"
               className="btn btn-link"
            >
               Discard changes
            </Link>
            <Link to="/all-cards" className="float-right btn  btn-secondary ">
               <div className="">
                  <img
                     src={saveLogo}
                     className=""
                     style={{ width: "22px" }}
                     alt="save-logo"
                  />
                  Save
               </div>
            </Link>
         </div>
         <div className="clearfix"></div>
         <div className=" text-center pt-3">
            <h4>Card properties</h4>
         </div>
         <div className="">
            <div
               id="properties"
               className="col-4 d-inline-block text-nowrap pl-0"
            >
               <p id="created-on">Created on:</p>
               <p id="last-attempt">Last attempt:</p>
               <p id="Next-attempt">Next attempt:</p>
               <p id="consecutives">Consecutives:</p>
            </div>
            <div className="col-4 d-inline-block ">
               <p>{toDisplayableDate(memoryCard.createdAt, "MMM. d, yyyy")}</p>
               <p>
                  {toDisplayableDate(memoryCard.lastAttemptAt, "MMM. d, yyyy")}
               </p>
               <p>
                  {toDisplayableDate(memoryCard.nextAttemptAt, "MMM. d, yyyy")}
               </p>
               <p>{memoryCard.totalSuccessfulAttempts}</p>
            </div>
         </div>
         <div className="clearfix"></div>
         <div className=" pt-5">
            <input
               id="delete-check"
               className="custom-checkbox"
               type="checkbox"
               style={{ width: "16px", height: "16px" }}
               checked
            />
            <label className="align-middle" htmlFor="delete-check">
               Show delete button
            </label>
         </div>
         <div className="pt-3">
            <Link
               to="/all-cards"
               id="delete-button"
               className="btn btn-outline-danger"
            >
               Delete this card
            </Link>
         </div>
      </AppTemplate>
   );
}
