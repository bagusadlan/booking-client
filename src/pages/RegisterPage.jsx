import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(e) {
    e.preventDefault()
    try {
      await axios.post('/register', {
        name,
        email,
        password
      })
    } catch (error) {
      alert('Registration failed')
    }
  }

  return (
    <div className="grow flex items-center justify-around">
      <div className="mb-16">
        <div className="text-4xl mb-4 text-center">Register</div>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input type="text" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button className="bg-primary w-full py-2 px-4 rounded-2xl text-white">
            Register
          </button>
          <div className="text-center py-2 text-gray-500">
            {'Already a member? '}
            <Link to={'/login'} className="underline text-black">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
