import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import style from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <Helmet>
        <html lang="en" />
        <title>Alphanumeric</title>
        <link rel="stylesheet" href="https://use.typekit.net/cni2rpi.css"></link>
        <link rel="stylesheet" href="https://cloud.typography.com/7804816/6709192/css/fonts.css" />
      </Helmet>
      <header className={style.head}>
        <div className={style.logo}>
          <Link to="/">Alphanumeric</Link>
        </div>
        <nav>
          <ul className={style.nav}>
            <li className={style.nav__link}>About</li>
            <li className={style.nav__link}>Notes</li>
            <li className={style.nav__link}>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className={style.projectHpe}>
          <ul className={style.nav}>
            <li className={style.nav__link}><a href="https://dribbble.com/ericfrommelt" target="_blank">Dribbble</a></li>
            <li className={style.nav__link}><a href="https://codepen.io/alphanumeric" target="_blank">Codepen</a></li>
            <li className={style.nav__link}><a href="https://github.com/ericfrommelt" target="_blank">Github</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Layout