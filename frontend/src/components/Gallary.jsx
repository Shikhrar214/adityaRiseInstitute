import React, { useEffect, useState } from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import {AbhayPandey, AvneeshPandey, Img01, Logo, RavinderVerma, Img02, Img03,  Img2, Img1, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img11} from '../assets/images.js'


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
        {
          original: Img01,
          thumbnail: Img01,
        },
        {
          original: Img02,
          thumbnail: Img02,
        },
        {
          original: Img03,
          thumbnail: Img03,
        },
        {
          original: Img1,
          thumbnail: Img1,
        },
        {
          original: Img11,
          thumbnail: Img11,
        },
        {
          original: Img2,
          thumbnail: Img2,
        },

        {
          original: Img3,
          thumbnail: Img3,
        },
        {
          original: Img4,
          thumbnail: Img4,
        },
        {
          original: Img5,
          thumbnail: Img5,
        },
        {
          original: Img6,
          thumbnail: Img6,
        },
        {
          original: Img7,
          thumbnail: Img7,
        },
        {
          original: Img8,
          thumbnail: Img8,
        },
        {
          original: Img9,
          thumbnail: Img9,
        },
      ];
    


    return (
        <>
            <div className=''>
                
                <ImageGallery className=""  items={images}  />;
            </div>
        </>
    )
}

export default Gallary
