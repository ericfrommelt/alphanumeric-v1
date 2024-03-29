import React from 'react'
import { css } from '@emotion/react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkUxUi = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "twcbcc_stacked.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "voicezone.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "vbb_stacked.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
    <div css={css`
        margin: 4em 0;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        background-color: white;
      `}>
        <div css={css`
          grid-column: 1 / span 12;
          @media screen and (min-width: 800px) {
            grid-column: 1 / span 12;
          }
        `}>
          <h2 css={css`

            @media screen and (min-width: 800px) {
              margin-top: 4em;
              margin-left: -.2em;
            }
          `}>Branding, UX/UI design</h2>
          <div css={css`
          width: 2rem;
          height: 4px;
          background-color: #0076c6;
        `}></div>
        <small css={css`
        `}>Time Warner Cable</small>
        </div>
        <div css={css`
          grid-column: 1 / span 12;
          z-index: 20;
          @media (min-width:820px) {
            
          }
        `}>
          <Img fluid={data.image1.sharp.fluid}></Img>
        </div>
      </div>
    </>
  )
}

export default WorkUxUi