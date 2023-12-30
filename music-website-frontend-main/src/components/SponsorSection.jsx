import React from 'react'
import '../styles/SponsorSection.css'
import SponsorSlide from './SponsorSlide'

const SponsorSection = () => {
  return (
    <div id='partners' className='sponsor-section'>
      <h1>Unlimited <span>100% Free</span> distribution</h1>
      <p>Get your music on Spotify, Apple Music, TikTok, YouTube, Tidal, Tencent and more. Keep 100% ownership of your music and stay in control of your career.</p>
      <SponsorSlide />
      <SponsorSlide />
      <SponsorSlide />
    </div>
  )
}

export default SponsorSection