import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import api from '../api/axios'
import { useAuth } from '../context/AuthContext'

export default function SignIn() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const { login }   = useAuth()
  const navigate    = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    try {
      const response = await api.post('/auth/login', { email, password })
      login(response.data.data)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    }
  }

  return (
    <div className="min-h-screen bg-[#0a1f1f] flex flex-col items-center justify-center px-4">
      {/* logo + heading */}
      <div className="text-center mb-8">
        <h1 className="text-white text-3xl font-bold tracking-tight">⊙ DevTrack</h1>
        <h2 className="text-white text-xl font-semibold mt-2">Sign In</h2>
      </div>
      {/* card */}
      <div className="bg-[#0d2b2b] border border-[#1a3f3f] rounded-2xl p-8 w-full max-w-md">
        {/* error */}
        {error && (
          <p className="text-red-400 text-sm bg-red-900/20 border border-red-800 rounded-lg px-4 py-2 mb-6">
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* email */}
          <div className="flex flex-col gap-1">
            <label className="text-[#7aa8a8] text-xs font-semibold uppercase tracking-widest">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="bg-[#0a1f1f] border border-[#1a3f3f] text-white placeholder-[#3a6060] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2a7a7a]"
            />
          </div>
          {/* password */}
          <div className="flex flex-col gap-1">
            <label className="text-[#7aa8a8] text-xs font-semibold uppercase tracking-widest">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-[#0a1f1f] border border-[#1a3f3f] text-white placeholder-[#3a6060] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2a7a7a]"
            />
          </div>
          {/* submit */}
          <button
            type="submit"
            className="mt-2 bg-[#c8faf4] text-[#0a1f1f] font-semibold py-3 rounded-lg text-sm hover:bg-[#a0f0e8] transition-colors"
          >
            Sign In
          </button>
        </form>

        {/* link */}
        <p className="text-center text-[#7aa8a8] text-sm mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#c8faf4] hover:underline">
            Create one
          </Link>
        </p>

      </div>

      {/* footer */}
      <p className="text-[#3a6060] text-xs mt-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#2a7a7a] inline-block" />
        Secure Provisioning
      </p>

    </div>
  )
}