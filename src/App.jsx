import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Profile from './components/Profile.jsx'
import { demoCredentials, student } from './student.js'

function App() {
  const [user, setUser] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const pageName = location.pathname === '/profile'
      ? 'Profile'
      : location.pathname === '/dashboard'
        ? 'Dashboard'
        : 'Login'
    document.title = `${pageName} | Student Portal`
  }, [location.pathname])

  function handleLogin(username, password) {
    if (username === demoCredentials.username && password === demoCredentials.password) {
      setUser(student)
      navigate('/dashboard', { replace: true })
      return true
    }

    return false
  }

  function handleLogout() {
    setUser(null)
    navigate('/login', { replace: true })
  }

  return (
    <div className="app-shell">
      {user && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/dashboard"
          element={user ? <Dashboard student={user} /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/profile"
          element={user ? <Profile student={user} /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Navigate to={user ? '/dashboard' : '/login'} replace />} />
      </Routes>
    </div>
  )
}

export default App
