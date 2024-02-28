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

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Layout   activeClassName="active">
      <h1 style={headingStyles}>Hello, I’m Cera!</h1>
      <h2 style={heading2Styles}>My interest in technology sprung from transforming thoughts into digital realities.</h2>
      <p style={{marginTop:-10, maxWidth:"45rem"}}>
        I spent my childhood building games in Roblox and Minecraft, defining storylines and the player experience.
        These early endeavors taught me how to bring a product into fruition and ignited my passion for computers and design. 
      </p>
      <br></br>
      <p style={{maxWidth:"45rem"}}>
      Inspired by these experiences, I pursued a B.S. in Computer Science at the University of Nevada, Las Vegas.
      I also leveraged software engineering internships to work on tools for developers and students.
      </p>
      <br></br>
      <p style={{maxWidth:"45rem"}}>
      I aspire to combine my technical background with my passion for creating in order to build products that make a difference in everyday life.
      </p>
      
      <p style={{marginTop: 60}}>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </p>

      <h1 id="about-connect" style={footerStyles}>Let's connect</h1>
        <div class="flex space-x-4">
          <a href="https://www.linkedin.com/in/cerasamson/"><u>LinkedIn↗</u></a>
          <a href="https://github.com/cerasamson"><u>GitHub↗</u></a>
        </div>
        <a href="mailto:cerasamson@gmail.com"><u>cerasamson@gmail.com </u></a>

      </Layout>
    </main>
  )
}


export default IndexPage

export const Head: HeadFC = () => <title>About</title>
