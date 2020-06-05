import React from "react";
import appLogo from "../../icons/logo-app.svg";

export default function Header() {
   return (
      <div>
         <img
            class="d-inline-block"
            src={appLogo}
            width="32px;"
            alt="app-logo"
         />
         <h3 class="d-inline-block text-brand">White Bear</h3>
         <a href="index.html" class="btn btn-link float-right">
            Log out
         </a>
      </div>
   );
}
