import { Link } from 'react-router-dom'
import '../styles/Intro.css'

const Intro = () => {
  return (
    <>
      <div className='intro-container'>
        <h1>
          The simplest way to <span>sell your music</span> online without any hidden fees
        </h1>
        <div className="intro-btn-container">
          {/* <button className='intro-btn'>Sign up</button> */}
          <button className='intro-btn'><Link to='/login'>Login</Link></button>
        </div>
      </div>
    </>
  )
}

export default Intro