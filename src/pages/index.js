import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";

export default function Home({ data }) {
  // const { title, description } = data.site.siteMetadata;
  // console.log(title, description);

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
      </section>
    </Layout>
  );
}

// export const query = graphql`
//   query SiteData {
//     site {
//       host
//       port
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// `;
