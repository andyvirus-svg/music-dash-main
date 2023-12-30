import { useRef, useState } from 'react'
import '../styles/Login.css'
import { useSignIn } from 'react-auth-kit'
import axios from 'axios'

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signIn = useSignIn()

  const form = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email,
      password,
    }

    try {
      const res = await axios.post('http://localhost:8000/auth/login', data)

      if (res.status === 200) {
        const signInConfig = {
          token: res.data.token,
          expiresIn: res.data.expiresIn,
          tokenType: 'Bearer',
          authState: res.data.authUserState,
          refreshToken: res.data.refreshToken,
          refreshTokenExpireIn: res.data.refreshTokenExpireIn
        }
        if (signIn(signInConfig)) {
          console.log('success')
          // Success - perform additional actions
        } else {
          throw new Error('Sign-in failed.')
        }
      } else {
        throw new Error(`Login failed with status code ${response.status}`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email,
      password,
    }
    try {
      const res = await axios.post('http://localhost:8000/auth/login', data)
      if(res.status === 200) {
        setUser(res.data.user)
        console.log('successfully logged in')
      }else {
        console.log('something went wrong')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="login-container">
      <div className="container">
        <form ref={form} onSubmit={onSubmit}>
          <div className="form-column">
            <div className="input-data">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="underline"></div>
              <label>Email ID</label>
            </div>
            <div className="input-data">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="underline"></div>
              <label>Password</label>
            </div>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
