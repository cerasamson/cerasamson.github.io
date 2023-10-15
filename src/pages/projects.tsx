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
  fontSize: "1.75rem",
  fontWeight: "bold"
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Layout>
      <div class="container mx-auto">
        <h3 style={{fontSize: 12}}><i>SENIOR CAPSTONE </i></h3>
        <h1 style={headingStyles}>VolunteerOne</h1>
        iOS app connecting volunteers to their communities <br></br>
        <a style={{fontSize:10, color:"#701a75"}} href="https://github.com/VolunteerOne/volunteer-one-app">
            VIEW REPO
        </a>
      </div>

      <div style={{paddingTop: 75}} class="container mx-auto">
        <h3 style={{fontSize: 12}}><i>SOFTWARE ENGINEER INTERNSHIP - MICROSOFT </i></h3>
        <h1 style={headingStyles}>Blazor Empty Project Templates</h1>
        Added in .NET 7 for Visual Studio <br></br>
        <a style={{fontSize:10, color:"#701a75"}} href="https://devblogs.microsoft.com/dotnet/asp-net-core-updates-in-dotnet-7-preview-6/#empty-blazor-project-templates#empty-blazor-project-templates">
            VIEW BLOG POST
        </a>
      </div>

      <div style={{paddingTop: 75}} class="container mx-auto">
        <h3 style={{fontSize: 12}}><i>EXPLORE INTERNSHIP - MICROSOFT </i></h3>
        <h1 style={headingStyles}>Journey</h1>
        Step-by-step learning experiences in Polyglot Notebooks <br></br>
        <a style={{fontSize:10, color:"#701a75"}} href="https://github.com/dotnet-interactive-learning/journey/tree/main">
            VIEW REPO
        </a>
        </div>

        <p style={{marginTop: 60}}>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </p>

      <h1 id="about-connect" style={footerStyles}>Let's connect</h1>
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

export const Head: HeadFC = () => <title>Cera Samson | Projects</title>
