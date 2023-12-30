import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import '../../styles/common/FileUpload.css'
import axios from 'axios'

const FileUpload = ({ icon, func }) => {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0]
      setUploadedFiles([file])

      console.log(file.type)

      if (file.type.startsWith('image/')) {
        uploadImageToCloudinary(file)
      } else if (file.type.startsWith('audio/')) {
        console.log('audio file is getting uploaded')
        func(file)
      } else {
        console.log('FUck this piece of shit')
      }
    },
  })

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'ndblhg0k')

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dpb4bfhzi/image/upload',
        formData
      )

      const imageUrl = response.data.url
      func(imageUrl)
      console.log(imageUrl)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="file-upload-container">
      <div {...getRootProps()} className="file-upload">
        <input {...getInputProps()}/>
        <div className="file-upload">
          <img src={icon} alt="File Upload" />
        </div>
      </div>
      <ul>
        {uploadedFiles.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  )
}
export default FileUpload
