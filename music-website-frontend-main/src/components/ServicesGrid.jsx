import React from 'react'
import '../styles/ServicesGrid.css'

const ServicesGrid = () => {
  return (
    <div id='about' className='services-grid-container'>
      <h1>Why choose Us ?</h1>
      <div className="parent">
        <div className="div2">
          <h1>150+</h1>
          <h3>OTT Channels & Digital Streaming platforms</h3>
          <p>
          Offering tools to help independent artists, independent labels, and independent distributors monetize their music and video songs.
          </p>
        </div>
        <div className="div3">
          <h1>10X</h1>
          <h3>More Views</h3>
          <p>
          Guaranteed YouTube Content ID, Artist Channel and Verified Channel Services allow you to monetize your music, song videos and increase revenues.
          </p>
        </div>
        <div className="div1">
          <h1>200+</h1>
          <h3>Creators</h3>
          <p>
            Monetize your existing music and videos in new territories
            worldwide, distribute singles, albums videos and compilations, all
            in one platform
          </p>
          <div className='services-grid-image-container'>
            <img src="https://www.musicdash.com/assets/player.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesGrid
