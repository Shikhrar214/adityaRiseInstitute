import React, { useEffect, useState } from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import {AbhayPandey, AvneeshPandey, Logo, RavinderVerma} from '../assets/images.js'

function Gallary() {
    const images = [
        {
          original: RavinderVerma,
          thumbnail: RavinderVerma,
        },
        {
          original: AbhayPandey,
          thumbnail: AbhayPandey,
        },
        {
          original: AvneeshPandey,
          thumbnail: AvneeshPandey,
        },
        {
          original: Logo,
          thumbnail: Logo,  
        },
      ];
    


    return (
        <>
            <div className=''>
                
                <ImageGallery  items={images} />;
            </div>
        </>
    )
}

export default Gallary
