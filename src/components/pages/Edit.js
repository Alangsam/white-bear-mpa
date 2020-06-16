import React from "react";
import saveLogo from "../../icons/save.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import { memoryCards } from "../../mock-data/memory-cards.js";
import toDisplayableDate from "date-fns/format";
import classnames from "classnames";
import {
   checkStringAgainstNumber,
   MAX_CARD_CHARACTERS,
} from "../../utils/helpers";

const memoryCard = memoryCards[1];

export default class Edit extends React.Component {
   constructor() {
      super();
      this.state = {
         imageryEntered: memoryCard.imagery,
         answerEntered: memoryCard.answer,
      };
   }

   setImageryState(e) {
      this.setState({ imageryEntered: e.target.value });
   }
   setAnswerState(e) {
      this.setState({ answerEntered: e.target.value });
   }
   enableOrDisableSave() {
      if (
         checkStringAgainstNumber(
            this.state.imageryEntered,
            MAX_CARD_CHARACTERS
         ) === false &&
         checkStringAgainstNumber(
            this.state.answerEntered,
            MAX_CARD_CHARACTERS
         ) === false &&
         this.state.imageryEntered.length > 0 &&
         this.state.answerEntered.length > 0
      ) {
         return false;
      } else {
         return true;
      }
   }
   showDeleteButton() {
      if (document.getElementById("delete-button").style.display === "") {
         document.getElementById("delete-button").style.display = "none";
      } else {
         document.getElementById("delete-button").style.display = "";
      }
   }

   render() {
      return (
         <AppTemplate>
            <div className=" mx-auto">
               <h4 className="text-center pt-2">Edit card</h4>
               <div className="card bg-primary">
                  <form className="card-body">
                     <textarea
                        id="addanswertext"
                        className="w-100"
                        rows="9"
                        value={this.state.imageryEntered}
                        onChange={async (e) => {
                           this.setImageryState(e);
                        }}
                     ></textarea>
                  </form>
               </div>
               <div className="card bg-secondary">
                  <div className="card-body">
                     <form>
                        <textarea
                           id="editimage"
                           className="w-100"
                           rows="5"
                           value={this.state.answerEntered}
                           onChange={async (e) => {
                              this.setAnswerState(e);
                           }}
                        ></textarea>
                     </form>
                  </div>
               </div>
            </div>
            <div className="">
               <p id="textcountright" className="float-left">
                  <span
                     id="imagery-span"
                     className={classnames({
                        "text-danger": checkStringAgainstNumber(
                           this.state.imageryEntered,
                           MAX_CARD_CHARACTERS
                        ),
                     })}
                  >
                     Top: {this.state.imageryEntered.length}/
                     {MAX_CARD_CHARACTERS}
                  </span>
               </p>

               <p id="textcountleft" className="float-right">
                  <span
                     className={classnames({
                        "text-danger": checkStringAgainstNumber(
                           this.state.answerEntered,
                           MAX_CARD_CHARACTERS
                        ),
                     })}
                  >
                     Bottom: {this.state.answerEntered.length}/
                     {MAX_CARD_CHARACTERS}
                  </span>
               </p>
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
               <Link
                  to="/all-cards"
                  id="button-to-save-changes"
                  className={classnames("float-right btn btn-secondary", {
                     disabled: this.enableOrDisableSave(),
                  })}
               >
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
                  <p>
                     {toDisplayableDate(memoryCard.createdAt, "MMM. d, yyyy")}
                  </p>
                  <p>
                     {toDisplayableDate(
                        memoryCard.lastAttemptAt,
                        "MMM. d, yyyy"
                     )}
                  </p>
                  <p>
                     {toDisplayableDate(
                        memoryCard.nextAttemptAt,
                        "MMM. d, yyyy"
                     )}
                  </p>
                  <p>{memoryCard.totalSuccessfulAttempts}</p>
               </div>
            </div>
            <div className="clearfix"></div>
            <div className=" pt-5">
               <input
                  id="delete-check"
                  className="custom-checkbox mr-2"
                  type="checkbox"
                  style={{ width: "16px", height: "16px" }}
                  onClick={() => {
                     this.showDeleteButton();
                  }}
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
                  style={{ display: "none" }}
               >
                  Delete this card
               </Link>
            </div>
         </AppTemplate>
      );
   }
}
