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
            <li className={style.nav__link}><Link to='/contact/'>Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout