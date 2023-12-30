import { useRef, useState } from 'react'
import '../styles/ContactSection.css'

const ContactSection = () => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const form = useRef()

  return (
    <div id='contact' className="contact-section">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form ref={form} onSubmit={''}>
          <div className="form-column">
            <div className="input-data">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="underline"></div>
              <label>Email</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <div className="underline"></div>
              <label>Subject</label>
            </div>
            <div className="input-data textarea">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="8"
                cols="80"
                required
              ></textarea>
              <br />
              <div className="underline"></div>
              <label>How can we help you ?</label>
              <br />
            </div>
          </div>
          <button
            type="submit"
            className="contact-btn"
            onClick={() => console.log('hello')}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactSection
