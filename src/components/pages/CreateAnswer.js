import React from "react";
import Header from "../ui/Header";

export default function CreateAnswer() {
   return (
      <div className="container">
         <div className="row">
            <div
               className="bg-success py-4 container-fluid text-white text-center fixed-top"
               hidden
            >
               <img src="style/success.svg" width="32" alt="success" />
               <span className="pl-3 align-middle">Card Created!</span>
            </div>
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1 ">
               <Header />
               <div
                  className="col-12 btn-group px-0"
                  role="group"
                  aria-label="navigation"
               >
                  <button className="btn btn-primary tab-active">
                     Create New
                  </button>
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
               <a
                  href="src/components/pages/CreateImagery.js"
                  id="next-go-to-imagery-btn"
                  className="float-right btn btn-lg btn-outline-secondary"
                  disabled="true"
               >
                  Next
               </a>
            </div>
         </div>
      </div>
   );
}
