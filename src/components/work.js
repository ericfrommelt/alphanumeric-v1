import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import style from './work.module.css'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        hackerImage: file(relativePath: { eq: "hacker.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cliffImage: file(relativePath: { eq: "cliff-crop.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        genomeImage: file(relativePath: { eq: "genome-face.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section className={style.workSection}>
        <h2 className={style.workHead}>Work</h2>
        <div className={style.projectHpe}>
          <figure className={style.projectFigure}>
            <Img className={style.projectImage} fluid={data.hackerImage.childImageSharp.fluid} />
          </figure>
          <div className={style.projectInfo}>
            <h3 className={style.projectTitleHpe}>Tech Stories</h3>
            <small className={style.projectRole}>Design + development</small>
            <p className={style.projectDescription}>A collection of editorial experiences for HPE.</p>
            <a className={style.projectLink} href="https://blissful-lichterman-3559c0.netlify.app/">View project</a>
          </div>
        </div>
      </section>
    )}
  />
)