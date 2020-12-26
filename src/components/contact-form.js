import * as React from 'react'
import style from './contact-form.module.css'

export default () => (
  <form name="contact" action="/success" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="contact" value="contact"></input>
    <section>
      <ul>
        <li>
          <label for="email">
            <p>Email</p>
            <input type="text" id="email" name="email" required />
          </label>
        </li>
        <li>
          <label for="name">
            <p>Name</p>
            <input type="text" id="name" name="name" required />
          </label>
        </li>
        <li>
          <label for="message">
            <p>Message</p>
            <textarea type="text" id="message" name="message" required />
          </label>
        </li>
      </ul>
      <input className="btn__sendMessage" type="submit" value="Send Message" />
    </section>
  </form>
)

