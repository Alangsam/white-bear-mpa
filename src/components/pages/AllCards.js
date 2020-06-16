import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { memoryCards } from "../../mock-data/memory-cards";
import MemoryCard from "../ui/MemoryCard";
import { orderBy } from "lodash";

export default class AllCards extends React.Component {
   constructor() {
      super();
      this.state = {
         whatSearched: "",
         cardsRendered: orderBy([...memoryCards], "lastAttemptAt", "desc"),
      };
   }

   filterCardsbySearch() {
      const arrOfMatches = memoryCards.filter((card) => {
         if (
            card.answer
               .toLowerCase()
               .indexOf(this.state.whatSearched.toLowerCase()) > -1 ||
            card.imagery
               .toLowerCase()
               .indexOf(this.state.whatSearched.toLowerCase()) > -1
         ) {
            return card;
         }
      });
      this.setState({
         cardsRendered: orderBy([...arrOfMatches], "lastAttemptAt", "desc"),
      });
   }

   filterCardsBySelect(e) {
      const arrOfSelected = [...this.state.cardsRendered];
      const orderedByRecent = orderBy(arrOfSelected, "lastAttemptAt", "desc");
      const orderedByOldest = orderBy(arrOfSelected, "lastAttemptAt", "asc");
      const orderedByHardest = orderBy(
         arrOfSelected,
         ["totalSuccessfulAttempts", "createdAt"],
         ["asc", "asc"]
      );
      const orderedByEasiest = orderBy(
         arrOfSelected,
         ["totalSuccessfulAttempts", "createdAt"],
         ["desc", "desc"]
      );
      if (e.target.value === "Most recent") {
         this.setState({ cardsRendered: orderedByRecent });
      } else if (e.target.value === "Oldest") {
         this.setState({ cardsRendered: orderedByOldest });
      } else if (e.target.value === "Hardest") {
         this.setState({ cardsRendered: orderedByHardest });
      } else if (e.target.value === "Easiest") {
         this.setState({ cardsRendered: orderedByEasiest });
      }
   }

   render() {
      return (
         <AppTemplate>
            <div className="row my-4">
               <div className="col-8">
                  <input
                     id="search-this-box"
                     className="form-control form-control-sm border-primary "
                     type="search"
                     placeholder="Search"
                     aria-label="Search"
                     onChange={(e) => {
                        this.setState({ whatSearched: e.target.value });
                        console.log(this.state.whatSearched);
                     }}
                  />
               </div>
               <div className="col-4">
                  <button
                     id="use-this-btn-to-search"
                     className="btn btn-sm btn-primary text-white btn-block"
                     onClick={() => {
                        this.filterCardsbySearch();
                     }}
                  >
                     Search
                  </button>
               </div>
            </div>
            <div className="row pt-4 no-gutters">
               <p className="col-4">search cards by</p>
               <select
                  id="sort"
                  className="form-control border-primary col-8 float-right w-50 pt-0 "
                  onChange={(e) => {
                     this.filterCardsBySelect(e);
                     console.log(e.target.value);
                  }}
               >
                  <option className="" defaultValue>
                     Most recent
                  </option>
                  <option>Oldest</option>
                  <option>Hardest</option>
                  <option>Easiest</option>
               </select>
            </div>
            {this.state.cardsRendered.map((memoryCard) => {
               return (
                  <MemoryCard
                     imagery={memoryCard.imagery}
                     answer={memoryCard.answer}
                     key={memoryCard.id}
                  />
               );
            })}
         </AppTemplate>
      );
   }
}
