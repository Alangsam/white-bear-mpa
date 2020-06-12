import React from "react";
import appLogo from "../../icons/logo-app.svg";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <div>
         <img
            className="d-inline-block"
            src={appLogo}
            width="32px;"
            alt="app-logo"
         />
         <h3 className="d-inline-block text-brand">White Bear</h3>
         <Link to="/" className="btn btn-link float-right">
            Log out
         </Link>
      </div>
   );
}
