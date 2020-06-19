import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

class ReviewAnswer extends React.Component {
   goToNextCard() {
      this.props.dispatch({
         type: actions.UPDATE_INDEX_OF_CURRENT_CARD,
      });
      this.props.history.push("/review-imagery");
   }

   render() {
      const memoryCard = this.props.queuedCards[this.props.indexOfCurrentCard];

      return (
         <AppTemplate>
            <div className="py-4">
               <div id="tukhtgrredwefw" className="card bg-primary text-light">
                  <div className="card-body">
                     <div>{memoryCard && memoryCard.imagery}</div>
                  </div>
               </div>
               <div id="wfwgtgewdqwd" className="card bg-secondary text-light">
                  <div className="card-body">
                     <div>{memoryCard && memoryCard.answer}</div>
                  </div>
               </div>
            </div>
            <div className=" mx-auto ">
               <Link to="/edit" className="btn btn-link">
                  Edit card
               </Link>
               <div className="float-right">
                  <button
                     className="btn btn-outline-secondary mr-4"
                     onClick={() => {
                        this.goToNextCard();
                     }}
                  >
                     Needs work
                  </button>
                  <button
                     className="btn  btn-secondary"
                     onClick={() => {
                        this.goToNextCard();
                     }}
                  >
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
}

function mapStateToProps(state) {
   return {
      queuedCards: state.queuedCards,
      indexOfCurrentCard: state.indexOfCurrentCard,
   };
}

export default connect(mapStateToProps)(ReviewAnswer);
