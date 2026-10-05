import { useState } from 'react'

function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!username.trim() || !password) {
      setError('Please enter both your username and password.')
      return
    }

    if (!onLogin(username.trim(), password)) {
      setError('Incorrect username or password. Please try again.')
    }
  }

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <div className="brand-mark" aria-hidden="true">SP</div>
        <p className="eyebrow">STUDENT PORTAL</p>
        <h1 id="login-title">Welcome back</h1>
        <p className="muted">Sign in to view your student dashboard.</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="username">Username</label>
          <input
            autoComplete="username"
            id="username"
            onChange={(event) => {
              setUsername(event.target.value)
              setError('')
            }}
            placeholder="Enter your username"
            value={username}
          />

          <label htmlFor="password">Password</label>
          <input
            autoComplete="current-password"
            id="password"
            onChange={(event) => {
              setPassword(event.target.value)
              setError('')
            }}
            placeholder="Enter your password"
            type="password"
            value={password}
          />

          {error && <p className="form-error" role="alert">{error}</p>}

          <button className="button button-primary login-button" type="submit">
            Login
          </button>
        </form>

        <p className="login-hint">
          Demo login: <strong>student</strong> / <strong>student123</strong>
        </p>
      </section>
    </main>
  )
}

export default Login
