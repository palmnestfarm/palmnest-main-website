import react from 'react'

const ImageLayout=({ imageUrl, heading })=> {
  return (
    <div className="position-relative">
    <img
      className="d-block w-100"
      src={imageUrl}
      alt=""
      style={{ height: "450px" }}
    />
    <div className="position-absolute top-50 start-50 translate-middle">
      <h1 className="text-white">{heading}</h1>
    </div>
  </div>
  )
}

export default ImageLayout