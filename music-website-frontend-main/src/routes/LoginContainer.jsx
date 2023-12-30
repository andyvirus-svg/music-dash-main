import Login from '../components/Login'
import Navbar from '../components/common/Navbar'

const LoginContainer = ({ setUser }) => {
  return (
    <div>
      <Navbar />
      <Login setUser={setUser} />
    </div>
  )
}

export default LoginContainer