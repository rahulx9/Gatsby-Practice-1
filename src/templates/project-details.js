import React from "react";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import * as styles from "../styles/project-detail.module.css";
import { graphql } from "gatsby";

export default function ProjectDetails({ data }) {
  const {
    html,
    frontmatter: {
      title,
      stack,
      featuredImg: {
        childImageSharp: { fluid: image },
      },
    },
  } = data.markdownRemark;
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <Img fluid={image} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
