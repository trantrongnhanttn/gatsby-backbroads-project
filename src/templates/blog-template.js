import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/single-blog.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import SEO from '../components/SEO'

const Blog = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        console.log(node)
        return (
          <div className="rich">
            <img
              src={node.data.target.fields.file['vi'].url}
              alt={node.data.target.fields.title['vi']}
            />
          </div>
        )
      },
      'embedded-entry-block': node => {
        //console.log(node)
        const { title, images, text } = node.data.target.fields
        return (
          <div>
            <h1>this is other post: {title['vi']}</h1>
            <img
              width="400"
              src={images['vi'].fields.file['vi'].url}
              alt={title['vi']}
            />
            {documentToReactComponents(text['vi'])}
          </div>
        )
      },
    },
  }
  return (
    <Layout>
      <SEO title={title} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`

export default Blog
