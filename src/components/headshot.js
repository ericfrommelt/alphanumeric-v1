import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import style from './headshot.module.css'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        portrait: file(relativePath: { eq: "ef_two.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <figure className={style.headshot}>
        <Img className={style.headshotImg} fluid={data.portrait.childImageSharp.fluid} />
      </figure>
    )}
  />
)