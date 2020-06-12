import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { memoryCards } from "../../mock-data/memory-cards";
import MemoryCard from "../ui/MemoryCard";

export default function AllCards() {
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
               />
            </div>
            <div className="col-4">
               <button
                  id="use-this-btn-to-search"
                  className="btn btn-sm btn-primary text-white btn-block"
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
            >
               <option className="" selected>
                  Most recent
               </option>
            </select>
         </div>
         {memoryCards.map((memoryCard) => {
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
