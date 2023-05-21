import React from "react";
import ImageLayout from "./Resources/ImageLayout";
import GalleryLayout from "./Resources/ImageGallery";

const Restaurant = () => {
  const imageUrls = [
    "https://static.wixstatic.com/media/4cebd5_01eb9c033cad4a789fab9147eff3ec7d~mv2.jpg/v1/fill/w_315,h_315,q_90/4cebd5_01eb9c033cad4a789fab9147eff3ec7d~mv2.webp",
    "https://static.wixstatic.com/media/4cebd5_e04b91984a394a398baa4ad68631fff8~mv2.jpg/v1/fill/w_315,h_315,q_90/4cebd5_e04b91984a394a398baa4ad68631fff8~mv2.webp",
    "https://static.wixstatic.com/media/4cebd5_f6379bbcface447db698d2562e87969a~mv2.jpg/v1/fill/w_315,h_315,q_90/4cebd5_f6379bbcface447db698d2562e87969a~mv2.webp",
    "https://static.wixstatic.com/media/4cebd5_24bab96e698246c7b9f3cf9f6f1fb439~mv2.jpg/v1/fill/w_315,h_315,q_90/4cebd5_24bab96e698246c7b9f3cf9f6f1fb439~mv2.webp",
    "https://static.wixstatic.com/media/4cebd5_445e462d5d104f03b2c1e80df277158d~mv2.jpg/v1/fill/w_315,h_315,q_90/4cebd5_445e462d5d104f03b2c1e80df277158d~mv2.webp",
    "https://static.wixstatic.com/media/4cebd5_0da4ec2ef7234dd28be918cc79951d95~mv2.webp/v1/fill/w_315,h_315,q_90/4cebd5_0da4ec2ef7234dd28be918cc79951d95~mv2.webp",
    "https://static.wixstatic.com/media/4cebd5_85258d20459f4af083b66aecc84210dc~mv2.webp/v1/fill/w_315,h_315,q_90/4cebd5_85258d20459f4af083b66aecc84210dc~mv2.webp",
    "https://static.wixstatic.com/media/4cebd5_d54347854a1c4fbfb45e5519adf03f78~mv2.webp/v1/fill/w_315,h_315,q_90/4cebd5_d54347854a1c4fbfb45e5519adf03f78~mv2.webp",
    "https://static.wixstatic.com/media/4cebd5_e04b91984a394a398baa4ad68631fff8~mv2.jpg/v1/fill/w_315,h_315,q_90/4cebd5_e04b91984a394a398baa4ad68631fff8~mv2.webp"
  ];
  return (
    <>
      <ImageLayout
        imageUrl="https://static.wixstatic.com/media/4cebd5_0a489268552c4ab092ba25dac27db711~mv2.webp"
        heading="RESTAURANT & BAR"
      />

      <GalleryLayout imageUrl={imageUrls} />
    </>
  );
};

export default Restaurant;
