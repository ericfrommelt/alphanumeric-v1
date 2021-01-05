import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import style from './work.module.css'
import TheHunterRuns from '../components/collage/the-hunter-runs'
import { Link } from 'gatsby'

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
      <>
        <h2 className={style.workHead}>Work</h2>
        <section className={style.workSection}>
          <div className={style.projectHpe}>
            <figure className={style.projectFigure}>
              <Img className={style.projectImage} fluid={data.hackerImage.childImageSharp.fluid} />
            </figure>
            <div className={style.projectInfo}>
              <h3 className={style.projectTitleHpe}>Tech Stories</h3>
              <small className={style.projectRole}>Design and development</small>
              <p className={style.projectDescription}>A collection of editorial experiences for HPE.</p>
              <a className={style.projectLink} href="https://blissful-lichterman-3559c0.netlify.app/">View project</a>
            </div>
          </div>
        </section>
        <section className={style.workSection}>
        <div className={style.projectCollage}>
          <figure className={style.projectFigure}>
            <TheHunterRuns />
          </figure>
          <div className={style.projectInfo}>
            <h3 className={style.projectTitleCollage}>Responsive Collage</h3>
            <small className={style.projectRole}>Design and development</small>
            <p className={style.projectDescription}>Exploring the seams of graphic storytelling with CSS grid. Ongoing project.</p>
            <Link className={style.projectLink} to="/collage">View project</Link>
          </div>
        </div>
      </section>
    </>
    )}
  />
)