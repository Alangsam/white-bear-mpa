import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import Header from "../ui/Header";

export default function ReviewAnswer() {
   return (
      <div class="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <Header />
               <div
                  className="d-flex btn-group px-0"
                  role="group"
                  aria-label="navigation"
               >
                  <a href="create-answer.html" className="btn btn-primary">
                     Create New
                  </a>
                  <button className="btn btn-primary tab-seperator tab-active">
                     Review
                  </button>
                  <button className="btn btn-primary tab-seperator">
                     All Cards
                  </button>
               </div>
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
            </div>
         </div>
      </div>
   );
}
