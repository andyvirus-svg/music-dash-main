import React from 'react'
import Sponsor from './Sponsor'

const SponsorSlide = () => {
  const slides = [
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png',
    }
  ]
  return (
    <>
      <div class="slider">
        <div class="slide-track">
          {slides.map((slide) => (
            <Sponsor
              image={slide.image}
            />
          ) )}
        </div>
      </div>
    </>
  )
}

export default SponsorSlide
