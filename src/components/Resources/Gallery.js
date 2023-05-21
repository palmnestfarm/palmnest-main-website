import React from "react";
import ImageLayout from "./ImageLayout";
import GalleryLayout from "./ImageGallery";

const Gallery = () => {
  const imageUrls = [
    "https://static.wixstatic.com/media/4cebd5_01eb9c033cad4a789fab9147eff3ec7d~mv2.jpg/v1/fill/w_315,h_315,q_90/4cebd5_01eb9c033cad4a789fab9147eff3ec7d~mv2.webp",
    "https://static.wixstatic.com/media/4cebd5_e04b91984a394a398baa4ad68631fff8~mv2.jpg/v1/fill/w_315,h_315,q_90/4cebd5_e04b91984a394a398baa4ad68631fff8~mv2.webp",
    "https://static.wixstatic.com/media/4cebd5_f6379bbcface447db698d2562e87969a~mv2.jpg/v1/fill/w_315,h_315,q_90/4cebd5_f6379bbcface447db698d2562e87969a~mv2.webp",
    "https://static.wixstatic.com/media/4cebd5_24bab96e698246c7b9f3cf9f6f1fb439~mv2.jpg/v1/fill/w_315,h_315,q_90/4cebd5_24bab96e698246c7b9f3cf9f6f1fb439~mv2.webp",
    "https://static.wixstatic.com/media/4cebd5_445e462d5d104f03b2c1e80df277158d~mv2.jpg/v1/fill/w_315,h_315,q_90/4cebd5_445e462d5d104f03b2c1e80df277158d~mv2.webp",
    "https://static.wixstatic.com/media/4cebd5_0da4ec2ef7234dd28be918cc79951d95~mv2.webp/v1/fill/w_315,h_315,q_90/4cebd5_0da4ec2ef7234dd28be918cc79951d95~mv2.webp",
    "https://static.wixstatic.com/media/4cebd5_85258d20459f4af083b66aecc84210dc~mv2.webp/v1/fill/w_315,h_315,q_90/4cebd5_85258d20459f4af083b66aecc84210dc~mv2.webp",
    "https://static.wixstatic.com/media/4cebd5_d54347854a1c4fbfb45e5519adf03f78~mv2.webp/v1/fill/w_315,h_315,q_90/4cebd5_d54347854a1c4fbfb45e5519adf03f78~mv2.webp",
    "https://static.wixstatic.com/media/4cebd5_f6379bbcface447db698d2562e87969a~mv2.jpg/v1/fill/w_315,h_315,q_90/4cebd5_f6379bbcface447db698d2562e87969a~mv2.webp"
  ];

  return (
    <>
      <ImageLayout
        imageUrl="https://static.wixstatic.com/media/4cebd5_0a489268552c4ab092ba25dac27db711~mv2.webp"
        heading="GALLERY"
      />

      <GalleryLayout imageUrl={imageUrls} />



      {/* <div className="container">
        <div className="row justify-content-center mt-5">
          {imageUrls.map((imageUrl, index) => (
            <div className="col-md-5 col-lg-3  m-1" key={index}>
              <div className="image-container">
                <img
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className="img-fluid "
                />
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Gallery;
