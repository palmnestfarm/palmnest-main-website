import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiTwitterFill } from "react-icons/ri";
import { IoLogoTumblr } from "react-icons/io";
import { BsInstagram,BsFacebook,BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="bg-white p-3 ">
        <div className="container mb-5 mt-5">
          <div className="d-lg-flex justify-content-evenly ">
            <div className="">
              <p className="fw-bold">CONTACT US</p>
              <p className="mt-4 ">
                Address: At Post Khokurle, Kolhapur -
                <div>
                  Goa road,Taluka: Gaganbawda,{" "}
                  <div>District: Kolhapur. 416206</div>
                </div>
              </p>
              <p className="mt-4">Phone No : 9422517750</p>
              <p className="mt-4">Email ID : palmnestfarm@gmail.com</p>
              <div className="d-flex mt-5">
              <IoLogoTumblr className="fs-3 m-2" />
              <RiTwitterFill className="fs-3 m-2" />
              <BsInstagram className="fs-3 m-2" />
              <BsFacebook className="fs-3 m-2" />
              <BsPinterest className="fs-3 m-2" />

              </div>
            </div>
            <div className="ml-3">
              <p className=" fw-bold">EXPLORE THE PALMNEST FARM</p>
              <ul className="navbar-nav">
                <li class="nav-item">
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
                  <Link className="nav-link fs-6" to="/Activities">
                    ACTIVITIES
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
                <li class="nav-item">
                  <a className="nav-link fs-6" href="contact">
                    CONTACT US
                  </a>
                </li>
                <li class="nav-item">
                  <a className="nav-link fs-6" href="contact">
                    CONTACT US
                  </a>
                </li>
              </ul>
              <div className="">
                <p className="mt-4">&copy;2023 by The PalmNest Farm </p>
              </div>
            </div>

            <div className="ml-3">
              <p className="fw-bold">GOOGLE MAP</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.630296184652!2d73.82857682598592!3d16.544751826530824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0360575bf47c5%3A0x2e2ed4f6dbbd6bfa!2sGaganbawda%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1683968584596!5m2!1sen!2sin"
                width="450"
                height="430"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
