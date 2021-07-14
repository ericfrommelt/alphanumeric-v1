import * as React from 'react'
import Layout from '../components/layout'
import style from './index.module.css'
import Work from '../components/work'
import Headshot from '../components/headshot'

const IndexPage = (props) => {
  return (
    <Layout>
      <section className={style.intro}>
        <div className={style.intro__content}>
          <Headshot />
          <p className={style.intro__copy}>
          <span className={style.intro__copy__sans}>Hello, I’m Eric Frommelt</span> — a Design Technologist with a background in Art Direction and Visual Design. I work on editorial experiences, microinteractions, prototypes and design systems. I love integrating editorial design, photography, illustration and animation through component based code.
          </p>
        </div>
      </section>
      <Work />
    </Layout>
  )
}

export default IndexPage
