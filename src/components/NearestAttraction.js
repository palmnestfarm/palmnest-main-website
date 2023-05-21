import React, { useState } from "react";
import Card from "./Resources/Card";
import "./NearestAttraction.css";

const NearestAttraction = () => {

  return (
    <>
      <div className="xyz">
        <div className=" position-relative">
          <img
            className="d-block w-100  img-fluid"
            style={{ height: "450px" }}
            src="https://static.wixstatic.com/media/4cebd5_721c14aeccdf4f8fa7be7604ad1d5fa0~mv2.webp"
            alt=""
          />
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className="text-white">Nearest Attraction</h1>
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

            {/* 4th card */}
            <div className="col-md-4 mt-5">
              <Card
                imageUrl="https://static.wixstatic.com/media/4cebd5_d7461c40219049fbae2130791a6ebc19~mv2.webp"
                title="Kumbhi Dam (12KM Away)"
                description="Medium Dam project of 3DMC with a beautiful view and great ambiance in the evening."
                buttonLabel="View Collection"
              />
            </div>
            {/* 5th card */}
            <div className="col-md-4 mt-5">
              <Card
                imageUrl="https://static.wixstatic.com/media/4cebd5_993ff8c2c54b4d94abbd1435ce31c248~mv2.webp"
                title="Vesaraf Dam"
                description="A minor Dam with good scenic area only 8 Km away from us."
                buttonLabel="View Collection"
              />
            </div>
            {/* 6th card */}
            <div className="col-md-4 mt-5 mb-5">
              <Card
                imageUrl="https://static.wixstatic.com/media/4cebd5_fcce1faa83c54911846a5c6bfb6e7950~mv2.webp"
                title="Morjai Pathar (15KM Away)"
                description="A highland plateau with a temple for warrior goddess Morjai Devi in an underground cave."
                buttonLabel="View Collection"
              />
            </div>
            {/* 7th card */}
            <div className="col-md-4 mt-5">
              <Card
                imageUrl="https://static.wixstatic.com/media/4cebd5_aaaa3ee973174b8c821d9dee22dd8c6e~mv2.webp"
                title="Fort Gagangiri (16KM)"
                description="Residing the Ashram of Saint Gagangiri Maharaj. Ancient fort of Chatrapati Shivaji Maharaj."
                buttonLabel="View Collection"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NearestAttraction;
