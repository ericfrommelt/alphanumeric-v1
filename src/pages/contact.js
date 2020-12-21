import * as React from 'react'
import Layout from '../components/layout'
import style from './contact.module.css'
import Art0001 from '../components/art/art0001'

const ContactPage = () => {
  return (
    <Layout>
      <section className={style.contact}>
        <div className={style.contactInfo}>
          <h1 className={style.contactHead}>Say Hello &#8212;</h1>
          <a className={style.contactLink} href="mailto:eric@alphanumeric.io">eric@alphanumeric.io</a>
          <h2 className={style.elsewhere__title}>Elsewhere &#8212;</h2>
          <ul className={style.elsewhere}>
            <li className={style.elsewhere__link}><a href="https://dribbble.com/ericfrommelt" target="_blank">Dribbble</a></li>
            <li className={style.elsewhere__link}><a href="https://codepen.io/alphanumeric" target="_blank">Codepen</a></li>
            <li className={style.elsewhere__link}><a href="https://github.com/ericfrommelt" target="_blank">Github</a></li>
          </ul>
        </div>
        <figure className={style.art}>
          <Art0001 />
        </figure>
      </section>
    </Layout>
  )
}

export default ContactPage