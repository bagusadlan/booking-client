import axios from 'axios'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Perks from './Perks'

function PlacesPage() {
  const { action } = useParams()
  // const places = await axios.get('/places')
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [addedPhotos, setAddedPhotos] = useState([])
  const [linkPhotos, setlinkPhotos] = useState('')
  const [description, setDescription] = useState('')
  const [perks, setPerks] = useState([])
  const [extraInfo, setExtraInfo] = useState('')
  const [checkIn, setCheckIn] = useState()
  const [checkOut, setCheckOut] = useState()
  const [maxGuests, setMaxGuests] = useState(1)

  function inputHeader(text) {
    return (
      <h2 className='text-2xl mt-4'>{text}</h2>
    )
  }

  return (
    <div>
      {action !== 'new' && (
        <Link to={'/account/places/new'} className='bg-primary py-2 px-4 rounded-full inline-flex gap-1 text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <div>Add New Places</div> 
        </Link>
      )}
      {action === 'new' && (
        <div>
          <form>
            {inputHeader('Text')}
            <input type='text' placeholder='title' value={title} onChange={e => setTitle(e.target.value)}></input>
            {inputHeader('Address')}
            <input type='text' placeholder='adress' value={address} onChange={e => setAddress(e.target.value)}></input>
            {inputHeader('Photos')}
            <div className='flex gap-2'>
              <input type='text' placeholder='add url' value={linkPhotos} onChange={e => setlinkPhotos(e.target.value)}></input>
              <button className='bg-gray-200 px-4 rounded-2xl'>Add&nbsp;photo</button>
            </div>
            <div className='mt-2 mb-3 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              <button className='border justify-center flex gap-1 border-gray-300 rounded-2xl p-8 text-gray-600'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
                Upload
              </button>
            </div>
            {inputHeader('Description')}
            <textarea placeholder='description' value={description} onChange={e => setDescription(e.target.value)}/>
            <h2 className='text-2xl mt-4'>Perks</h2>
            <Perks selected={perks} onChange={setPerks}/>
            {inputHeader('Extra Info')}
            <textarea placeholder='extra info' value={extraInfo} onChange={e => setExtraInfo(e.target.value)}/>
            {inputHeader('Check In & Check Out')}
            <div className='grid gap-1 grid-cols-3'>
              <div>
                <p className='mt-1 -mb-1'>Check In</p>
                <input type='text' placeholder='check in' value={checkIn} onChange={e => setCheckIn(e.target.value)}></input>
              </div>
              <div>
                <p className='mt-1 -mb-1'>Check Out</p>
                <input type='text' placeholder='check in' value={checkOut} onChange={e => setCheckOut(e.target.value)}></input>
              </div>
              <div>
                <p className='mt-1 -mb-1'>Max Guests</p>
                <input type='number' placeholder='check in' value={maxGuests} onChange={e => setMaxGuests(e.target.value)}></input>
              </div>
            </div>
            <div className='flex justify-center mt-6'>
              <button type='submit' className='bg-primary text-white py-2 px-4 '>Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default PlacesPage
