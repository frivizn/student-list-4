import React, { useState, useEffect } from 'react'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem('isLoggedIn')

    if (storedUser === '1') {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    // Any email with @ character
    // Any password > 6 characters long
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Home onLogout={logoutHandler} />}
    </React.Fragment>
  )
}

export default App
