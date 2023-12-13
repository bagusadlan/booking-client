import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import AccountNav from '../components/AccountNav'

function PlacesPage() {
  const [places, setPlaces] = useState([])
  useEffect(() => {
    axios.get('/places').then(({ data }) => {
      console.log(data.data)
      setPlaces(data.data)
    })
  }, [])

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
      <div className="mt-8 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {places.length > 0 &&
          places.map((place) => (
            <Link to={'/account/places/' + place._id} key={place._id} className="">
              {place.photos.length > 0 && (
                <div className="mb-2">
                  <img
                    src={'http://localhost:4000/uploads/' + place.photos[0]}
                    className="rounded-xl w-full h-full object-cover object-center"
                  />
                </div>
              )}
              <div>
                <h2 className="font-bold">{place.title}</h2>
                <p className="text-gray-500">{place.description}</p>
                <p className="text-gray-500">{place.maxGuests} Orang</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default PlacesPage
