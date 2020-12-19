import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import style from './index.module.css'
import Art00001 from '../components/art/art0001'
import Work from '../components/work'
import Headshot from '../components/headshot'

const IndexPage = (props) => {
  return (
    <Layout>
      <section className={style.intro}>
        <div className={style.intro__content}>
          <Headshot />
          <p className={style.intro__copy}>
          <span className={style.intro__copy__sans}>Hello, I’m Eric Frommelt</span> — a UX Engineer with a background in Art Direction and Design. I work on editorial experiences, microinteractions, prototypes and design systems. I love integrating editorial design, photography, illustration and animation through component based code.
          </p>
        </div>
        {/* <figure className={style.artwork}>
          <Art00001></Art00001>
        </figure> */}
      </section>
      <Work />
    </Layout>
  )
}

export default IndexPage
