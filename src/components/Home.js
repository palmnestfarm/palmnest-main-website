import React, { useState } from "react";

import Card from "./Resources/Card";

const Home = () => {
  const birdImageUrl =
    "https://static.wixstatic.com/media/e2441ad017564ec58acb23abbf52682f.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e2441ad017564ec58acb23abbf52682f.png";

  return (
    <>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="https://static.wixstatic.com/media/4cebd5_a626343c17a74f21a50f48ba73e237b5~mv2.jpg/v1/fill/w_1903,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cebd5_a626343c17a74f21a50f48ba73e237b5~mv2.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://static.wixstatic.com/media/4cebd5_b8b954e6a5f9457d96c71331353c9972~mv2.jpg/v1/fill/w_1903,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cebd5_b8b954e6a5f9457d96c71331353c9972~mv2.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://static.wixstatic.com/media/4cebd5_1b09e1702a6447d8b698375b01d1639e~mv2.jpg/v1/fill/w_1903,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cebd5_1b09e1702a6447d8b698375b01d1639e~mv2.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <div className="text-center">
          <div className="text-center mt-5">
            <h1 class=" font-monospace text-secondary fs-1 lh-sm fw-light">
              Welcome to The PalmNest Farm
            </h1>
            <p className="mt-2 fs-5 font-monospace text-secondary fw-bold">
              The Place where you would love to stay
            </p>
          </div>
        </div>

        <p className="mt-5 lh-lg fs-6 font-monospace text-black d-inline-block">
          The Palmnest Farm provides a welcome escape from the urban world. Here
          the serene beauty and laid back luxury farmstay converges to define an
          enticing pleasure that beckon you back time after time. The Palmnest
          Farm is situated within the bustling and vibrant environment of
          Gaganbawda, 45 km from kolhapur. It is remarkable to discover the
          farming land surrounded by lush greenery with sugarcane, seasonal
          crops and rice paddies alongside 1800 metres of Kumbhi river admist
          the western ghats of Sahayadri which is a beautiful calming and
          settling in the Palmnest Farm. Whether you want to spend some quality
          time with family, arrange a casual get together with friends, organise
          a team building or motivational meeting, experience a quiet honeymoon
          or simply unwind…
        </p>

        <p className="mt-3 lh-lg font-monospace mb-5 text-black ">
          The Palmnest Farm is the perfect destination for all your
          requirements. But you have to visit us to believe us. Your friendly
          hosts at Palmnest Farm will do everything to ensure that your holiday
          is not only delightful, but also very special and memorable.
        </p>
      </div>

      <div className=" container d-lg-flex">
        <div>
          <img
            className="mt-5"
            src="https://static.wixstatic.com/media/4cebd5_0da4ec2ef7234dd28be918cc79951d95~mv2.webp"
          />
        </div>
        <div className="m-5">
          <h1 className="font-monospace text-secondary fs-1 lh-sm fw-light ">
            The PalmNest Farm
          </h1>
          <p className=" lh-lg font-monospace mb-5 text-black">
            The Palmnest Farm provides a welcome escape from the urban world.
            Here the serene beauty and laid back luxury farmstay converges to
            define an enticing pleasure that beckon you back time after time.
            The Palmnest Farm is situated within the bustling and vibrant
            environment of Gaganbawda, 45 km from kolhapur. It is remarkable to
            discover the farming land surrounded by lush greenery with
            sugarcane, seasonal crops and rice paddies alongside 1800 metres of
            Kumbhi river admist the western ghats of Sahayadri which is a
            beautiful calming and settling in the Palmnest Farm. Whether you
            want to spend some quality time with family, arrange a casual get
            together with friends, organise a team building or motivational
            meeting, experience a quiet honeymoon or simply unwind…
          </p>
        </div>
      </div>

      <section className="container mt-5 position-relative w-75">
        <div className="row">
          <div className="col-md-4 mt-5 mb-5">
            <Card
              imageUrl="https://static.wixstatic.com/media/4cebd5_da79daf0f4fd436f94c42d349309cde2~mv2.webp"
              title="Karul Ghat"
              description="Beautiful and very scenic in monsoon, Number of waterfall fall down in this Ghat in rainy season, Dense Forest, Potentials for the development of ecotourism."
             
              buttonLabel="View Collection"
            />
          </div>

          {/* 2nd card */}
          <div className="col-md-4 mt-5 mb-5">
            <Card
              imageUrl="https://static.wixstatic.com/media/4cebd5_72797d9be7a345f29b59f6d158d19866~mv2.webp"
              title="Andur Dam"
              description="Minor Dam with scenic backwater which is just 3 Km away from the palmnest."
              buttonLabel="View Collection"
            />
          </div>
          {/* 3rd card */}
          <div className="col-md-4 mt-5 mb-5">
            <Card
              imageUrl="https://static.wixstatic.com/media/4cebd5_90927e23db8b4eb1acffd6b933ea0342~mv2.webp"
              title="Ramling Caves (9 KM Away)"
              description="A Photographer's Paradise which consists of monolithic temples that are said to be made by Pandavas."
              buttonLabel="View Collection"
            />
          </div>
        </div>
      </section>

      <div className="position-relative mt-5">
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/4790bd8de3ad454caef0e19b3864d94f.jpg/v1/fill/w_1903,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4790bd8de3ad454caef0e19b3864d94f.jpg"
          alt=""
          style={{ height: "500px", width: "100%" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="rounded-circle bg-white p-5 ">
            <div className="text-center">
              <p>CONTACT US</p>
              <p>
                At Post Khokurle, Kolhapur - Goa road,Taluka:
                <div> Gaganbawda, District: Kolhapur. 416206</div>
              </p>
              <p>Phone No :+91 9422517750</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
