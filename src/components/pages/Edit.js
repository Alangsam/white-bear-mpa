import React from "react";
import saveLogo from "../../icons/save.svg";
import Header from "../ui/Header";

export default function Edit() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1 ">
               <Header />
               <div
                  className="d-flex btn-group px-0"
                  role="group"
                  aria-label="navigation"
               >
                  <a href="create-answer.html" className="btn btn-primary ">
                     Create New
                  </a>
                  <a
                     href="review-imagery.html"
                     className="btn btn-primary tab-seperator"
                  >
                     Review
                  </a>
                  <a
                     href="all-cards.html"
                     className="btn btn-primary tab-seperator"
                  >
                     All Cards
                  </a>
               </div>
               <div className=" mx-auto">
                  <h4 className="text-center pt-2">Edit card</h4>
                  <div className="card bg-primary">
                     <form className="card-body text-center">
                        <textarea
                           id="addanswertext"
                           maxlength="240"
                           className=""
                           rows="9"
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
                  <button id="discard-the-changes" className="btn btn-link">
                     Discard changes
                  </button>
                  <a
                     href="all-cards.html"
                     className="float-right btn  btn-secondary "
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
                  </a>
               </div>
               <div className="clearfix"></div>
               <div className=" text-center pt-3">
                  <h4>Card properties</h4>
               </div>
               <div className="pl-0">
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
                     <p>date</p>
                     <p>date</p>
                     <p>date</p>
                     <p>num</p>
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
                  <label className="align-middle" for="delete-check">
                     Show delete button
                  </label>
               </div>
               <div className="pt-3">
                  <a
                     href="all-cards.html"
                     id="delete-button"
                     className="btn btn-outline-danger"
                  >
                     Delete this card
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
