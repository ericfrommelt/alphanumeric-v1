import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import style from './index.module.css'
import Art00001 from '../components/art/art0001'
import Work from '../components/work'

const IndexPage = (props) => {
  return (
    <Layout>
      <section className={style.intro}>
        <p className={style.intro__copy}>
        Hello, I’m Eric Frommelt — a Front End Developer with a background in Art Direction and Design. I love working on editorial experiences, microinteractions, and prototypes.
        </p>
        <figure className={style.artwork}>
          <Art00001></Art00001>
        </figure>
      </section>
      <Work />
    </Layout>
  )
}

export default IndexPage
