import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-md">
          <a class="navbar-brand" href="#">
            <img
              src="https://static.wixstatic.com/media/4cebd5_19592079aa804c0b84d631d8b271ca86~mv2.png/v1/fill/w_241,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png"
              alt="My Logo"
              width="250"
              height="60"
              className="d-inline-block align-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item nav">
                <Link className="nav-link fs-6" to="/">
                  HOME
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link fs-6" to="/About-us">
                  ABOUT US
                </Link>
              </li>
              
              <li class="nav-item">
                <Link className="nav-link fs-6" to="/About-us">
                  ACCOMODATION
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link fs-6" to="/Activities">
                  ACTIVITIES
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link fs-6" to="#">
                  RESOURCES
                </Link>
              </li>
              
              <li class="nav-item">
                <Link className="nav-link fs-6" to="/nearest-attraction">
                  NEAREST ATTRACTION
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link fs-6" to="/restaurant">
                  RESTAURANT & BAR
                </Link>
              </li>
              <li class="nav-item">
                <a className="nav-link fs-6" href="contact">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
