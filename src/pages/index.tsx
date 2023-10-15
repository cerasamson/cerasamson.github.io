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




const IndexPage: React.FC<PageProps> = () => {
  
  return (
    <main style={pageStyles}>
      <Layout>
      <h1 style={headingStyles}>
        <b>I'm Cera</b>, a <b>developer</b> and <b>recent computer science grad</b> based in Las Vegas, NV.
      </h1>
      <p style={paragraphStyles}>
      <button class="bg-transparent hover:bg-fuchsia-900 text-fuchsia-900 font-semibold hover:text-white py-3 px-7 border border-fuchsia-900 hover:border-transparent rounded-full">
      <a href="/#connect">CONTACT</a> 
      </button>
      ___
      <a href="/about" class="text-white">
                <button class="bg-gradient-to-r from-fuchsia-900 from-35% via-rose-400 via-100% hover:bg-blue-700 text-white font-bold py-3 px-7 rounded-full">
                MORE ABOUT ME

      </button>
      </a>
      </p>
      
      <p style={{marginTop: 240}}>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </p>

      <h1 id="connect" style={footerStyles}>Let's connect:</h1>

      
      
      <a>Email: </a>
      <a href="mailto:cerasamson@gmail.com"><u>cerasamson@gmail.com </u></a>
      <div class="flex space-x-2">
      <a href="https://www.linkedin.com/in/cerasamson/">LinkedIn</a>
      <a> + </a>
      <a href="https://github.com/cerasamson">GitHub</a>
      </div>
            </Layout>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Cera Samson | Home</title>
