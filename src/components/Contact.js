import React from "react";
import { Container, Row, Col, Image } from "bootstrap";
import { BsFillGeoAltFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import ImageLayout from "./Resources/ImageLayout";

const Contact = () => {
  return (
    <>
      <ImageLayout
        imageUrl="https://static.wixstatic.com/media/4cebd5_d2b05fd8e85f490f91828034e95fa164~mv2.webp"
        heading="CONTACT"
      />

      <div class="d-lg-flex justify-content-center align-items-center bg-light mt-5">
        <div class="col-md-5 h-100 ">
          <div class="bg-light  h-100 m-2">
            <img
              src="https://static.wixstatic.com/media/4cebd5_180097cd99844bef873e7c98f1003c7b~mv2.webp"
              alt="your-image-description"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="col-md-5 d-flex justify-content-center align-items-center h-100 bg-white">
          <div class=" p-5 d-flex flex-column justify-content-center align-items-center h-100">
            <form action="/user" method="post" class="bg-white p-5">
              <div class="me-md-3 mb-3 mb-md-0">
                <div class="d-flex align-items-center mb-3">
                  <BsFillGeoAltFill className="fs-5 " />
                  <p className="m-1">
                    At Post Khokurle, Kolhapur - <div></div>Goa road, Taluka:
                    Gaganbawda, District: Kolhapur. 416206
                  </p>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <BsFillTelephoneFill className="fs-5" />
                  <p className="m-1">+91 9422517750</p>
                </div>
                <div class="d-flex align-items-center">
                  <MdEmail className="fs-5" />
                  <p className="m-1">palmnestfarm@gmail.com</p>
                </div>
              </div>
              <div class="mb-3 mt-5">
                <div class="d-flex flex-column flex-md-row">
                  <div class="me-md-3 mb-3 mb-md-0">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="ms-md-3">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="message"
                  rows="5"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="btn btn-primary w-100 bg-black text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center bg-light">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7649.250192484085!2d73.8298857370271!3d16.54501405472739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0360575bf47c5%3A0x2e2ed4f6dbbd6bfa!2sGaganbawda%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1684069174327!5m2!1sen!2sin"
          width="83%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
