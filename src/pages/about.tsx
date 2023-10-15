import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/Layout';

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const footerStyles = {
  fontSize: "2rem",
  fontWeight: "bold",
}

const headingStyles = {
  marginTop: -50,
  marginBottom: 35,
  maxWidth: "45rem",
  fontSize: "2rem",
  fontWeight: "bold"
}

const heading2Styles = {
  marginTop: -10,
  marginBottom: 35,
  maxWidth: "45rem",
  fontSize: "1.5rem",
  fontWeight: "bold"
}
const headingAccentStyles = {
  color: "#663399",
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
      <h1 style={headingStyles}>I’m Cera, a recent grad, coffee lover, and advocate for inclusivity in tech.</h1>
      <h2 style={heading2Styles}>My interest in technology grew from the idea of transforming thoughts into digital realities.</h2>
      <p style={{marginTop:-10, maxWidth:"45rem"}}>
        I spent my childhood building games in Roblox and Minecraft, designing everything from storylines to marketing.
        These early endeavors taught me how to bring a product into fruition and ultimately my passion for computers and design. 
      </p>
      <br></br>
      <p style={{maxWidth:"45rem"}}>
      Inspired by these experiences, I pursued a major in computer science at the University of Nevada, Las Vegas.
      I also leveraged software engineering internships to help create tools for developers and students.
      </p>
      <br></br>
      <p style={{maxWidth:"45rem"}}>
      I aspire to combine my technical background with my passion for creating to build products that make a difference in everyday life.
      </p>
      
      <p style={{marginTop: 60}}>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </p>

      <h1 id="about-connect" style={footerStyles}>Let's connect:</h1>
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

export const Head: HeadFC = () => <title>About - Cera Samson</title>
