// import libraries
import React from "react";
import { Link } from "react-router-dom";

// exporting default component at the top instead of the bottom

export default function Navbar() {
  return (
    <>
        <nav className="navbar is-white">
          <div className="navbar-brand">
            <a className="navbar-item">
              {/* made image in canva, uploaded to google drive, made link to icon sharable and changed the url link so that it resembled this -> https://drive.google.com/uc?export=view&id=[id] */}
              <img src="https://drive.google.com/uc?export=view&id=16O4r_fuMzFMhvipWeNHM_Jz2R6OxFp5G" />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                Home
              </Link>

              <Link to="/about" className="navbar-item">
                About Fitcoin
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link">
                  Getting started
                </Link>

                <div className="navbar-dropdown">
                  <Link to="" className="navbar-item">
                    Creating a workout
                  </Link>
                  <Link to="" className="navbar-item">
                    Rewards
                  </Link>
                </div>
              </div>
              <a href="https://github.com/lumpyspayzprincess" target="_blank" className="navbar-item">
                My GitHub Page
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  {/* find out how to change the button colours before Tuesday */}
                  <Link to="/signup" className="button is-primary">
                    <strong>Sign up</strong>
                  </Link>
                  <Link to="/login" className="button">
                    <strong>Login</strong>
                  </Link>
                  {/* <Link to="/login" className="button">
                    <strong>Logout</strong>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}