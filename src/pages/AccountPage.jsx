import { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios'

import PlacesPage from './PlacesPage'

export default function AccountPage() {
  const { user, ready, setUser } = useContext(UserContext)
  const [redirext, setRedirext] = useState(null)
  let { subpage } = useParams()

  if (!ready) return 'Loading...'

  if (redirext) return <Navigate to={redirext} />

  if (ready && !user && !redirext) return <Navigate to={'/login'} />

  if (subpage === undefined) subpage = 'profile'

  function linkClass(type = null) {
    let className = 'py-2 px-4 inline-flex gap-1 rounded-full'
    if (type === subpage) {
      className += ' bg-primary text-white'
    } else {
      className += ' bg-gray-300'
    }

    return className
  }

  async function logout() {
    await axios.post('/logout')
    setRedirext('/')
    setUser(null)
  }

  return (
    <div>
      <nav className="w-full my-8 flex justify-center gap-4">
        <Link className={linkClass('profile')} to={'/account/profile'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          My Profile
        </Link>
        <Link className={linkClass('bookings')} to={'/account/bookings'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          My Bookings
        </Link>
        <Link className={linkClass('places')} to={'/account/places'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
          </svg>

          My Accomodation
        </Link>
      </nav>
      {subpage === 'profile' && (
        <div className="max-w-md mx-auto text-center">
          <div className="mb-2">
            Logged in as {user.name} <br />
          </div>
          <button className="bg-primary px-2 py-1 text-white" onClick={logout}>
            Logout
          </button>
        </div>
      )}
      {subpage === 'places' && <PlacesPage />}
    </div>
  )
}
