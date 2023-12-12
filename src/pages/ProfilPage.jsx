import { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import axios from 'axios'

import AccountNav from '../components/AccountNav'

export default function AccountPage() {
  const { user, ready, setUser } = useContext(UserContext)

  if (!ready) return 'Loading...'

  async function logout() {
    await axios.post('/logout')
    setRedirext('/')
    setUser(null)
  }

  return (
    <div>
      <AccountNav />
      <div className="max-w-md mx-auto text-center">
        <div className="mb-2">
          Logged in as {user.name} <br />
        </div>
        <button className="bg-primary px-2 py-1 text-white" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  )
}
