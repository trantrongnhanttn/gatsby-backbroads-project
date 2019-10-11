import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
// import img from '../../images/defaultBcg.jpeg'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img fluid={aboutImage.childImageSharp.fluid} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            incidunt, blanditiis non facere debitis molestiae necessitatibus
            eius corporis quisquam voluptates ducimus sed voluptatibus fuga
            harum similique cumque vitae minus soluta.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            provident sit. Illo dolor ipsum quibusdam consequuntur. Obcaecati,
            molestias totam! Alias consectetur expedita aliquam corrupti eveniet
            laborum commodi, vitae facilis repellat!
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
