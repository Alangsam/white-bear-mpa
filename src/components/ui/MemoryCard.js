import React from "react";
import editLogo from "../../icons/edit.svg";
import { Link } from "react-router-dom";

export default function MemoryCard(props) {
   return (
      <div className="py-4 d-flex">
         <div className="flex-fill px-0">
            <div className="card bg-primary text-light">
               <div className="card-body">
                  <div>{props.imagery}</div>
               </div>
            </div>
            <div className="card bg-secondary text-light">
               <div className="card-body">
                  <div>{props.answer}</div>
               </div>
            </div>
         </div>
         <div className="btn btn-link ml-4 d-flex">
            <Link to="/edit">
               <img src={editLogo} width="20px" alt="edit-button" />
               Edit
            </Link>
         </div>
      </div>
   );
}
