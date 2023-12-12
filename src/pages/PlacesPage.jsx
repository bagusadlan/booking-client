import { Link, useParams } from 'react-router-dom'

import AccountNav from '../components/AccountNav'

function PlacesPage() {
  return (
    <div>
      <AccountNav />
      <div className="text-center">
        <Link
          to={'/account/places/new'}
          className="bg-primary py-2 px-4 rounded-full inline-flex gap-1 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <div>Add New Places</div>
        </Link>
      </div>
    </div>
  )
}

export default PlacesPage
