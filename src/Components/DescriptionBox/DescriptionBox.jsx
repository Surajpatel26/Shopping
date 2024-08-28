import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'> 
      <div className="descriptionbox-navigator">
        <div className="descrptionbox-nav-box">Description</div>
        <div className="descrptionbox-nav fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Discover the perfect blend of quality and style with our latest [Product Name]. Crafted from premium materials, this [Product Type] offers exceptional comfort and durability, ensuring it stands the test of time. Whether you're updating your wardrobe, enhancing your living space, or searching for the perfect gift, this item is designed to meet your needs with elegance and functionality.</p>
        <p>we bring you a seamless shopping experience with a vast collection of high-quality products across various categories. Whether you're searching for the latest in fashion, cutting-edge electronics, home essentials, or unique gifts, our online store is designed to cater to all your needs.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
