import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import Perks from '../components/Perks'
import PhotosUploader from '../components/PhotosUploader'
import AccountNav from '../components/AccountNav'

function PlacesFormPage() {
  const { placeId } = useParams()

  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [addedPhotos, setAddedPhotos] = useState([])
  const [description, setDescription] = useState('')
  const [perks, setPerks] = useState([])
  const [extraInfo, setExtraInfo] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [maxGuests, setMaxGuests] = useState(1)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    if (!placeId) return

    axios.get('/places/' + placeId).then(({ data }) => {
      const place = data.data

      setTitle(place.title)
      setAddress(place.address)
      setAddedPhotos(place.photos)
      setDescription(place.description)
      setPerks(place.perks)
      setExtraInfo(place.extraInfo)
      setCheckIn(place.checkIn)
      setCheckOut(place.checkOut)
      setMaxGuests(place.maxGuests)
    })
  }, [])

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>
  }

  async function savePlace(e) {
    e.preventDefault()
    try {
      const placeData = {
        title,
        address,
        photos: addedPhotos,
        description,
        perks,
        extraInfo,
        checkIn,
        checkOut,
        maxGuests
      }

      if (!placeId) {
        await axios.post('/places', placeData)
      } else {
        await axios.put('/places', { id: placeId, ...placeData })
      }

      setRedirect(true)
    } catch (error) {
      alert('Failed add new place')
    }
  }

  if (redirect) return <Navigate to={'/account/places'} />

  return (
    <div>
      <AccountNav />
      <form onSubmit={savePlace}>
        {inputHeader('Title')}
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        {inputHeader('Address')}
        <input
          type="text"
          placeholder="adress"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
        {inputHeader('Photos')}
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        {inputHeader('Description')}
        <textarea
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <h2 className="text-2xl mt-4">Perks</h2>
        <Perks selected={perks} onChange={setPerks} />
        {inputHeader('Extra Info')}
        <textarea
          placeholder="extra info"
          value={extraInfo}
          onChange={(e) => setExtraInfo(e.target.value)}
        />
        {inputHeader('Check In & Check Out')}
        <div className="grid gap-1 grid-cols-3">
          <div>
            <p className="mt-1 -mb-1">Check In</p>
            <input
              type="text"
              placeholder="check in"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            ></input>
          </div>
          <div>
            <p className="mt-1 -mb-1">Check Out</p>
            <input
              type="text"
              placeholder="check in"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            ></input>
          </div>
          <div>
            <p className="mt-1 -mb-1">Max Guests</p>
            <input
              type="number"
              placeholder="check in"
              value={maxGuests}
              onChange={(e) => setMaxGuests(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button type="submit" className="bg-primary text-white py-2 px-4 ">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default PlacesFormPage
