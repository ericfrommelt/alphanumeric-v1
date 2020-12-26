import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import style from './success.module.css'
import Art0001 from '../components/art/art0001'

const SuccessPage = () => {
  return (
    <Layout>
      <section className={style.contact}>
        <div className={style.contactInfo}>
          <h1 className={style.contactHead}>
            Thanks—
          </h1>
          <p className={style.successCopy}>
            for sending me a message. I'll get back to you shortly.
          </p>
          <p>Back to <Link to="/">Home</Link></p>
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

export default SuccessPage