import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

export default class Login extends React.Component {
   constructor() {
      super();
      this.state = {
         EmailFieldIsBlank: false,
         PasswordFieldIsBlank: false,
      };
   }

   checkIfCredentialsEntered() {
      const inputedEmail = document.getElementById("Email_textbox_bottom")
         .value;
      const inputedPassword = document.getElementById("Email_password_bottom")
         .value;
      if (inputedEmail === "") {
         this.setState({ EmailFieldIsBlank: true });
      } else {
         this.setState({ EmailFieldIsBlank: false });
      }
      if (inputedPassword === "") {
         this.setState({ PasswordFieldIsBlank: true });
      } else {
         this.setState({ PasswordFieldIsBlank: false });
      }
   }

   render() {
      return (
         <div className="col-lg-4 ml-lg-8 mr-auto pl-1 mb-9">
            <div className="card mt-9  mx-auto" style={{ width: "350px" }}>
               <div className="card-body">
                  <h2 className="card-title">Welcome back</h2>
                  <p className="card-text">
                     Log in with your email address and password.
                  </p>
                  <form>
                     <div className="form-group">
                        <label htmlFor="Email_textbox_bottom">
                           Email address
                        </label>
                        <input
                           id="Email_textbox_bottom"
                           className={classnames({
                              "form-control": true,
                              "is-invalid": this.state.EmailFieldIsBlank,
                           })}
                           type="email"
                           name="login_info"
                        ></input>
                        {this.state.EmailFieldIsBlank && (
                           <div
                              htmlFor="Email_textbox_bottom"
                              id="you-need-to-enter-email"
                              className="text-danger"
                           >
                              Please enter your email address.
                           </div>
                        )}
                     </div>
                     <div className="form-group">
                        <label htmlFor="Email_password_bottom">Password</label>
                        <input
                           id="Email_password_bottom"
                           className={classnames({
                              "form-control": true,
                              "is-invalid": this.state.PasswordFieldIsBlank,
                           })}
                           type="password"
                           name="login_info"
                        ></input>
                        {this.state.PasswordFieldIsBlank && (
                           <div
                              htmlFor="Email_password_bottom"
                              id="you-need-to-enter-something"
                              className="text-danger"
                           >
                              Please enter your password.
                           </div>
                        )}
                     </div>
                  </form>
                  <button
                     to="/create-answer"
                     className="btn btn-success float-right mt-4"
                     onClick={() => {
                        this.checkIfCredentialsEntered();
                     }}
                  >
                     Log in
                  </button>
               </div>
            </div>
         </div>
      );
   }
}
