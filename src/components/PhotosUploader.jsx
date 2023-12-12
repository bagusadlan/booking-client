import axios from 'axios'
import { useState } from 'react'

function PhotosUploader({addedPhotos, onChange}) {
  const [photoLink, setPhotoLink] = useState('')

  async function addPhotoByLink(e) {
    e.preventDefault()

    const {data} = await axios.post('/upload-photo-by-link', ({url: photoLink}))
    onChange(prev => {
      return [...prev, data.data]
    })
    setPhotoLink('')
  }

  async function uploadPhoto(e) {
    const { files } = e.target
    const data = new FormData()
    for (let i = 0; i < files.length; i++) {
      data.append('photos', files[i])
    }
    axios.post('/upload', data, {
      headers: {
        'Content-Type': 'multipart/formdata'
      }
    }).then(response => {
      const {data} = response
      onChange(prev => {
        return [...prev, ...data.data]
      })
    })
  }

  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="add url"
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
        ></input>
        <button
          onClick={addPhotoByLink}
          className="bg-gray-200 px-4 rounded-2xl"
        >
          Add&nbsp;photo
        </button>
      </div>
      <div className="mt-2 mb-3 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <label className="h-32 cursor-pointer border justify-center flex gap-1 border-gray-300 rounded-2xl text-gray-600 items-center">
          <input
            onChange={uploadPhoto}
            type="file"
            multiple
            className="hidden"
          />
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
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          Upload
        </label>
        {addedPhotos.length > 0 &&
          addedPhotos.map(link => (
            <div className="h-32 flex">
              <img
                src={'http://localhost:4000/uploads/' + link}
                key={link}
                className="rounded-2xl w-full object-cover"
              />
            </div>
          ))}
      </div>
    </>
  )
}

export default PhotosUploader
