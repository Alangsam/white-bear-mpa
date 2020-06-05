import React from "react";
import mainLogo from "../../img/logo-landing.png";
import { Link } from "react-router-dom";

export default function Landing() {
   return (
      <div className="background-image">
         <div className="container-fluid">
            <div className="row">
               <div className="offset-1 pt-5 d-none d-sm-inline">
                  <img
                     className="d-inline align-top"
                     src={mainLogo}
                     alt="logo"
                  />
                  <h1 className="d-inline pl-3 text-white">
                     <span className="align-middle">White Bear</span>
                  </h1>
               </div>
               <div className="offset-1 pt-5 d-sm-none">
                  <img
                     className="d-inline"
                     src={mainLogo}
                     width="100px"
                     alt="smaller-logo"
                  />
                  <h4 className="d-inline-block pl-3 text-white">White Bear</h4>
               </div>
            </div>
            <div className="row ">
               <div className="col-lg-4   ml-auto pl-1">
                  <div
                     id="create"
                     className="card mt-9  mx-auto"
                     style={{ width: "350px" }}
                  >
                     <div className="card-body">
                        <h2 className="card-title">Nice to meet you</h2>
                        <p className="card-text">
                           Sign up for White Bear. Free forever.
                        </p>
                        <button
                           id="signup"
                           className="btn btn-success btn-block"
                        >
                           signup
                        </button>
                     </div>
                  </div>
                  <div
                     id="creating-acc"
                     className="card mt-9  mx-auto"
                     style={{ width: "350px" }}
                  >
                     <div className="card-body">
                        <h2 className="card-title">Nice to meet you</h2>
                        <p className="card-text">
                           Sign up for White Bear. Free forever.
                        </p>
                        <p>Let's get you signed up</p>
                        <form>
                           <div className="form-group">
                              <label htmlFor="Email_textbox">
                                 Email address
                              </label>
                              <input
                                 id="Email_textbox"
                                 className="form-control border border-dark "
                                 type="email"
                                 name="login_info"
                              ></input>
                              <div
                                 htmlFor="Email_textbox"
                                 id="you-have-to-create-email"
                                 className="invalid-feedback"
                              >
                                 Please enter your email address.
                              </div>
                              <div
                                 htmlFor="Email_textbox"
                                 id="you-have-to-be-more-unique"
                                 className="invalid-feedback"
                              >
                                 You need more unique characters
                              </div>
                              <div
                                 htmlFor="Email_textbox"
                                 id="you-have-to-make-yours-valid"
                                 className="invalid-feedback"
                              >
                                 Please enter a valid email address
                              </div>
                           </div>
                           <div className="form-group">
                              <label htmlFor="Email_password">
                                 Create a password
                              </label>
                              <input
                                 id="Email_password"
                                 className="form-control border border-dark"
                                 type="password"
                                 name="login_info"
                              ></input>
                              <div
                                 htmlFor="Email_password"
                                 id="you-have-to-enter-something-password"
                                 className="invalid-feedback"
                              >
                                 You must enter a password
                              </div>
                              <div
                                 htmlFor="Email_password"
                                 id="you-have-to-create-password"
                                 className="invalid-feedback"
                              >
                                 Your password must be at least 9 characters.
                              </div>
                              <div
                                 htmlFor="Email_password"
                                 id="you-need-to-not-use-local"
                                 className="invalid-feedback"
                              >
                                 Your email address cannot be used in your
                                 password.
                              </div>
                              <div
                                 htmlFor="Email_password"
                                 id="you-need-to-be-more-original"
                                 className="invalid-feedback"
                              >
                                 Your password is too common
                              </div>
                           </div>
                        </form>
                        <Link
                           to="/create-answer"
                           className="btn btn-success btn-block mt-4"
                        >
                           Let's go!
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 ml-lg-8 mr-auto pl-1 mb-9">
                  <div
                     className="card mt-9  mx-auto"
                     style={{ width: "350px" }}
                  >
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
                                 className="form-control border border-dark"
                                 type="email"
                                 name="login_info"
                              ></input>
                              <div
                                 htmlFor="Email_textbox_bottom"
                                 id="you-need-to-enter-email"
                                 className="invalid-feedback"
                              >
                                 Please enter your email address.
                              </div>
                           </div>
                           <div className="form-group">
                              <label htmlFor="Email_password_bottom">
                                 Password
                              </label>
                              <input
                                 id="Email_password_bottom"
                                 className="form-control border border-dark"
                                 type="password"
                                 name="login_info"
                              ></input>
                              <div
                                 htmlFor="Email_password_bottom"
                                 id="you-need-to-enter-password"
                                 className="invalid-feedback"
                              >
                                 Your password must be at least 9 characters.
                              </div>
                              <div
                                 htmlFor="Email_password_bottom"
                                 id="you-need-to-enter-something"
                                 className="invalid-feedback"
                              >
                                 Please enter your password.
                              </div>
                           </div>
                        </form>
                        <Link
                           to="/create-answer"
                           className="btn btn-success float-right mt-4"
                        >
                           Log in
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
