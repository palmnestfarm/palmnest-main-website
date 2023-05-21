import React from "react";
import "./Activities.css";


const Activities = () => {
  return (
    <>
      <div className="xyz ">
        <div className="position-relative">
          <img
            className="d-block w-100   img-fluid"
            style={{ height: "450px" }}
            src="https://static.wixstatic.com/media/4cebd5_d2b05fd8e85f490f91828034e95fa164~mv2.webp"
            alt=""
          />
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className="text-white">ACTIVITIES</h1>
          </div>
        </div>

        <section className="gallary min-vh-100 m-5 ">
          <div className="container-lg w-75">
            <div className="row g-4 row-cols-1 row-cols-sm-1 row-cols-md-3 ">
              <div className="col ">
                <span>Cycling</span>
                <img className="activity_image" src="https://static.wixstatic.com/media/4cebd5_b4a252a22bac47aabe6b55e0868214d9~mv2.webp" alt="" />
              </div>

              <div className="col">
                <span>Nature Trails</span>
                <img className="activity_image" src="https://static.wixstatic.com/media/4cebd5_58eb8021059e45cc9d0a9f70f76c5043~mv2.webp" alt="" />
              </div>

              <div className="col">
                <span>Bullock Card Ride</span>
                <img className="activity_image" src="https://static.wixstatic.com/media/4cebd5_8edaae2a2787432f8080f0f0cf98f743~mv2.webp" alt="" />
              </div>

              <div className="col">
                <span>Indoor Games</span>
                <img className="activity_image" src="https://static.wixstatic.com/media/4cebd5_3faf1a1a8e1c4e32b96724dbb5608357~mv2.webp" alt="" />
              </div>

              <div className="col">
                <span>Swimming</span>
                <img className="activity_image" src="https://static.wixstatic.com/media/4cebd5_a0f0b8d9548a494ca547d6a75147dee1~mv2.webp" alt="" />
              </div>

              <div className="col">
                <span>Sunset Point</span>
                <img className="activity_image" src="https://static.wixstatic.com/media/4cebd5_b1300165905541698aff9bbfd5874682~mv2.webp" alt="" />
              </div>

              <div className="col">
                <span>Star Gazing</span>
                <img className="activity_image"  src="https://static.wixstatic.com/media/4cebd5_d2b05fd8e85f490f91828034e95fa164~mv2.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Activities;
