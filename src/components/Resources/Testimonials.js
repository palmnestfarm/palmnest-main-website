import React from "react";
import "./Testimonials.css";
// import bb1 from "../img/border1.png"

const Testimonials = () => {
  return (
    <>
      <div className="xyz">
        <div className="position-relative">
          <img
            className="d-block w-100  img-fluid"
            style={{ height: "450px" }}
            src="https://static.wixstatic.com/media/4cebd5_0a489268552c4ab092ba25dac27db711~mv2.webp"
            alt=""
          />
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className="text-white">TESTIMONIALS</h1>
          </div>
        </div>

        <section className="gallary min-vh-100 ">
          <div className="container-lg position-relative w-75">
            <div className="row g-4 row-cols-1 row-cols-sm-1 row-cols-md-3 m-5">
              <div className="col  m-3 p-4  bb">
                <p className="fw-bold">
                  We came across this beautiful place through airbnb & instantly
                  fell in love with it.its an oasis filled with serenity &
                  comfort. the service is top notch right from the helpers to
                  the cook & the caretaker (diwanji) everybody touches you with
                  humility & care Amazing food & care Amazing food & comfortable
                  Stay
                </p>
                <div className="text-center">
                  <h4 className="fs-5 mt-3">MANALI & KAPILSATAM</h4>
                  <h4 className="fs-5 mt-3">( Pune )</h4>
                </div>
              </div>

              <div className="col m-3 p-4 bb">
                <p className="fw-bold">
                  this place is amazing !!!? its so calm, so green so beautiful
                  we like hearing cows and birds from our . the food was
                  tasty,especially the breakfast poha!!
                </p>
                <div className="text-center">
                <h4 className="fs-5 mt-3">KOEN & LEBINE</h4>
                  <h4 className="fs-5 mt-3">( Belgium,Brussels )</h4>
                </div>
              </div>

              <div className="col m-3 p-4 ab ">
                <p className="fw-bold">
                  hi,I am Tanisha this is my first visit to a farm house,i was
                  pretty amazed with the experience of staying in this beautiful
                  place with cows standing around,farmland an all sides and
                  river flowing by.we had some amazing food for lunch and
                  dinner.i must not forgot about the fresh oxygen we got
                </p>
                <div className="text-center">
                <h4 className="fs-5 mt-3">TANISHA CHOUDHURY</h4>
                  <h4 className="fs-5 mt-3">( Pune )</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
