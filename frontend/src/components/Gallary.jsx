import React, { useEffect, useState } from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import {AbhayPandey, AvneeshPandey, Logo, RavinderVerma} from '../assets/images.js'

function Gallary() {
    const images = [
        {
          original: AvneeshPandey,
          thumbnail: AvneeshPandey,
        },
        {
          original: AbhayPandey,
          thumbnail: AbhayPandey,
        },
        {
          original: Logo,
          thumbnail: Logo,  
        },
        {
          original: RavinderVerma,
          thumbnail: RavinderVerma,
        },
        
      ];
    


    return (
        <>
            <div className='w-2/4  justify-center items-center mx-auto flex'>
                
                <ImageGallery className=""  items={images}  />;
            </div>
        </>
    )
}

export default Gallary
