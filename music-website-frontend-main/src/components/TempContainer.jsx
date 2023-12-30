import { useState } from 'react'
import Login from '../routes/LoginContainer'
import Dashboard from './Dashboard'

const TempContainer = () => {
  const [user, setUser] = useState(null)

  return (
    <>
      {user ? <Dashboard user={user} /> : <Login setUser={setUser} />}
    </>
  )
}

export default TempContainer