import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact'>
      <div className="container">
      <div className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We’re here to help you with any questions about your order or products.</p>

        <form onSubmit={(e) => e.preventDefault()} className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="input-group">
            <input type="text" placeholder="Subject" />
          </div>

          <div className="input-group">
            <textarea placeholder="Your Message" rows="6" required />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Contact
