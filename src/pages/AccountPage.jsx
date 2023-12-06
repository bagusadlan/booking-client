import { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom"
import axios from 'axios'

export default function AccountPage() {
  const { user, ready, setUser } = useContext(UserContext)
  const [redirext, setRedirext] = useState(null);
  let {subpage} = useParams()
  
  if (!ready) return 'Loading...'

  if (redirext) return <Navigate to={redirext}/>

  if (ready && !user && !redirext) return <Navigate to={'/login'}/>

  if (subpage === undefined) subpage = 'profile'

  function linkClass(type = null) {
    let className = "py-2 px-4"
    if (type === subpage) {
      className += " bg-primary rounded-full text-white"
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
        <Link className={linkClass('profile')} to={'/account/profile'} >My Profile</Link>
        <Link className={linkClass('bookings')} to={'/account/bookings'} >My Bookings</Link>
        <Link className={linkClass('places')} to={'/account/places'} >My Accomodation</Link>
      </nav>
      {subpage === 'profile' && (
        <div className="max-w-md mx-auto text-center">
          <div className="mb-2">
            Logged in as {user.name} <br/>
          </div>
          <button className="bg-primary px-2 py-1 text-white" onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  )
}
