import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from 'react-auth-kit'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import LoginContainer from './routes/LoginContainer.jsx'
// import Dashboard from './components/Dashboard.jsx'
import TempContainer from './components/tempContainer.jsx'
import SignupContainer from './routes/SignupContainer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider
      authType={'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === 'https:'}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<TempContainer />} />
          <Route path="/admin/signup" element={<SignupContainer />} />
          {/* <Route path="/dashboard" element={<TempContainer />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
