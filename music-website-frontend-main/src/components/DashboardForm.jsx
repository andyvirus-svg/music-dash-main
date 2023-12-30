import '../styles/DashboardForm.css'
import Select from 'react-select'
import FileUpload from './common/FileUpload'
import fileUploadIcon from '../assets/icons/file-upload.png'
import coverArtIcon from '../assets/icons/thumbnail-icon.png'
import CreatableSelect from 'react-select/creatable'
import { useRef, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashboardForm = ({ user }) => {
  const musicGenres = [
    { value: 'pop', label: 'Pop' },
    { value: 'rock', label: 'Rock' },
    { value: 'hiphop', label: 'Hip Hop' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'country', label: 'Country' },
    { value: 'classical', label: 'Classical' },
    { value: 'electronic', label: 'Electronic' },
    { value: 'blues', label: 'Blues' },
    { value: 'reggae', label: 'Reggae' },
    { value: 'rnb', label: 'R&B' },
    { value: 'folk', label: 'Folk' },
    { value: 'metal', label: 'Metal' },
    { value: 'indie', label: 'Indie' },
    { value: 'alternative', label: 'Alternative' },
    { value: 'soul', label: 'Soul' },
    { value: 'funk', label: 'Funk' },
    { value: 'disco', label: 'Disco' },
    { value: 'punk', label: 'Punk' },
    { value: 'latin', label: 'Latin' },
    { value: 'reggaeton', label: 'Reggaeton' },
  ]
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'caramel', label: 'Caramel' },
    { value: 'mint', label: 'Mint' },
    { value: 'blueberry', label: 'Blueberry' },
    { value: 'coffee', label: 'Coffee' },
    { value: 'peach', label: 'Peach' },
  ]

  const [title, setTitle] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [genre, setGenre] = useState('')
  const [audio, setAudio] = useState(null)
  const [username, setUsername]  = useState('default')
  const form = useRef()

  const uploadSongtoMinio = async (data) => {
    console.log('upload song to minio', data)
    try {
      const res = await axios.post('http://localhost:8000/upload', data)
      if (res.status === 200) {
        console.log('success song uploaded')
        toast('Thanks for uploading the song. We got it from here!')
        setTitle('')
        setThumbnail('')
        setGenre('')
        setAudio(null)
      } else {
        toast.error('Something went wrong while uploading your song')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setUsername(user?.email)
    const data = {
      title,
      thumbnail,
      genre,
      username,
    }
    try {
      const res = await axios.post('http://localhost:8000/song/create', data)
      if (res.status === 200) {
        console.log('success')
      } else {
        console.log('something went wrong')
      }
    } catch (error) {
      console.error(error)
    }
    const songData = new FormData()
    songData.append('audio', audio)
    songData.append('username', username);
    uploadSongtoMinio(songData)
  }

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form ref={form} onSubmit={onSubmit}>
          <div className="formbold-steps">
            <ul>
              <li className="formbold-step-menu1 active">
                <span>♥</span>
                New Submission
              </li>
            </ul>
          </div>

          <div className="formbold-form-step-1 active">
            <div className="formbold-input-flex">
              <div>
                <label for="firstname" className="formbold-form-label">
                  Release Title
                </label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Andrio"
                  id="firstname"
                  className="formbold-form-input"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>
              <div>
                <label for="genre" className="formbold-form-label">
                  Genre
                </label>
                {/* <Select
                  options={musicGenres}
                  isMulti
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(values) => {
                    setGenres((prevGenres) => {
                      const newGenres = values.map((v) => v.value)
                      return [...prevGenres, ...newGenres]
                    })
                  }}
                /> */}
                <input
                  type="text"
                  name="firstname"
                  placeholder="Andrio"
                  id="firstname"
                  className="formbold-form-input"
                  onChange={(e) => setGenre(e.target.value)}
                  value={genre}
                />
              </div>
            </div>

            {/* <div className="formbold-input-flex">
              <div>
                <label for="email" className="formbold-form-label">
                  Label
                </label>
                <input
                  type="text"
                  name="label"
                  placeholder=""
                  id="label"
                  className="formbold-form-input"
                />
              </div>
              <div>
                <label for="type" className="formbold-form-label">
                  Type
                </label>
                <Select
                  options={options}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
            </div> */}

            <div className="formbold-input-flex">
              <div className="artist-container">
                <label for="dob" className="formbold-form-label">
                  Username
                </label>
                {/* <Select
                  options={options}
                  isMulti
                  className="basic-multi-select"
                  classNamePrefix="select"
                /> */}
                <input
                  type="text"
                  name="artistname"
                  placeholder="Andrio"
                  id="artistname"
                  className="formbold-form-input"
                  // onChange={(e) => setTitle(e.target.value)}
                  value={ user.email || 'default' }
                  disabled="disabled"
                />
              </div>
            </div>

            <div className="formbold-input-flex">
              <div className="music-upload-container">
                <label className="formbold-form-label">Music Upload</label>
                <FileUpload icon={fileUploadIcon} func={setAudio} />
              </div>
              <div className="coverart-upload-container">
                <label className="formbold-form-label">Cover Art</label>
                <FileUpload icon={coverArtIcon} func={setThumbnail} />
              </div>
            </div>
          </div>

          <div className="formbold-form-btn-wrapper">
            <button className="formbold-back-btn">Back</button>

            <button
              className="formbold-btn"
            >
              Submit
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1675_1807)">
                  <path
                    d="M10.7814 7.33312L7.20541 3.75712L8.14808 2.81445L13.3334 7.99979L8.14808 13.1851L7.20541 12.2425L10.7814 8.66645H2.66675V7.33312H10.7814Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1675_1807">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default DashboardForm
