import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom"

export default function AccountPage() {
  const { user, ready } = useContext(UserContext)
  let {subpage} = useParams()

  
  if (!ready) return 'Loading...'

  if (ready && !user) return <Navigate to={'/login'}/>

  if (subpage === undefined) subpage = 'profile'

  function linkClass(type = null) {
    let classString = "py-2 px-4"
    if (type === subpage) {
      classString += " bg-primary rounded-full text-white"
    }

    return classString
  }

  return (
    <div>
      <nav className="w-full mt-8 flex justify-center gap-4">
        <Link className={linkClass('profile')} to={'/account/profile'} >My Profile</Link>
        <Link className={linkClass('bookings')} to={'/account/bookings'} >My Bookings</Link>
        <Link className={linkClass('places')} to={'/account/places'} >My Accomodation</Link>
      </nav>
    </div>
  )
}
