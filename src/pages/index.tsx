import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/Layout';

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


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Layout activeClassName="active">

        {/* Intro */}
        <h1 style={headingStyles}>
          <b>I'm Cera</b>, a <b>developer</b> and <b>recent computer science grad</b> based in Las Vegas, NV.
        </h1>
        
        {/* Button */}
        <p style={paragraphStyles}>
          <button class="bg-transparent hover:bg-indigo-500 text-indigo-500
          font-semibold hover:text-white py-3 px-7 border border-indigo-500
          hover:border-transparent rounded-full">
            <a href="/about" style = {{padding: '10px'}} > MORE ABOUT ME →</a>
          </button>
        </p>

        {/* Footer */}
        <p style={{marginTop: 100}}>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </p>

        <h1 id="about-connect" style={footerStyles}>Let's connect</h1>
        <div class="flex space-x-4">
          <a href="https://www.linkedin.com/in/cerasamson/"><u>LinkedIn↗</u></a>
          <a href="https://github.com/cerasamson"><u>GitHub↗</u></a>
        </div>
        <a>Email: </a>
        <a href="mailto:cerasamson@gmail.com"><u>cerasamson@gmail.com </u></a>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Cera Samson | Home</title>
