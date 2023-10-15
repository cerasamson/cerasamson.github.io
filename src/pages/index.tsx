import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/Layout';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 35,
  maxWidth: "65rem",
  fontSize: "4rem",
}

const footerStyles = {
  fontSize: "2rem",
  fontWeight: "bold",
}

const paragraphStyles = {
  marginBottom: 48,
  color: "white",
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Layout>
      <h1 style={headingStyles}>
        <b>I'm Cera</b>, a <b>developer</b> and <b>recent computer science grad</b> based in Las Vegas, NV.
      </h1>
      <p style={paragraphStyles}>
      <button class="bg-transparent hover:bg-fuchsia-900 text-fuchsia-900 font-semibold hover:text-white py-3 px-7 border border-fuchsia-900 hover:border-transparent rounded-full">
      <AnchorLink to="/#connect">CONTACT</AnchorLink> 
      </button>
      ___
      <a href="/about" class="text-white">
                <button class="bg-gradient-to-r from-fuchsia-900 from-35% via-rose-400 via-100% hover:bg-blue-700 text-white font-bold py-3 px-7 rounded-full">
                MORE ABOUT ME       →

      </button>
      </a>
      </p>
      
      <p style={{marginTop: 240}}>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </p>

      <h1 id="connect" style={footerStyles}>Let's connect:</h1>
      <div style={{marginTop: 10}} class="flex space-x-8">
      <a href="https://www.linkedin.com/in/cerasamson/">LinkedIn</a>
      <a href="https://github.com/cerasamson">GitHub</a>
      <a href="mailto:cerasamson@gmail.com">Email</a>
      </div>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home - Cera Samson</title>
