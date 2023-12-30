import { useState } from 'react'
import '../styles/DashBoardSidebar.css'
function DashBoardSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div>
      <label for="check">
        <button className={`sidebar-btn ${sidebarOpen ? 'sidebar-btn-active' : ''}`} onClick={ () => toggleSidebar()}>X</button>
      </label>
      <div className={`sidebar ${sidebarOpen ? 'sidebar-active' : ''}`}>
        <header>Menu</header>
        <a href="#" className="active">
          <i className="fas fa-qrcode"></i>
          <span>Dashboard</span>
        </a>
        <a href="#">
          <i className="fas fa-link"></i>
          <span>Shortcuts</span>
        </a>
        <a href="#">
          <i className="fas fa-stream"></i>
          <span>Overview</span>
        </a>
        <a href="#">
          <i className="fas fa-calendar"></i>
          <span>Events</span>
        </a>
        <a href="#">
          <i className="far fa-question-circle"></i>
          <span>About</span>
        </a>
        <a href="#">
          <i className="fas fa-sliders-h"></i>
          <span>Services</span>
        </a>
        <a href="#">
          <i className="far fa-envelope"></i>
          <span>Contact</span>
        </a>
      </div>
    </div>
  )
}

export default DashBoardSidebar
