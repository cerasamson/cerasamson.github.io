import React from 'react'
import {Link} from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const navStyles = {
marginRight:75,
fontSize: "1.3rem",
fontWeight: "bold",
hover:"#0FA0CE",
}

const ghStyles = {
  marginTop: -25,
  marginLeft: "78rem"
}

const linkedinStyles = {
  marginTop: -22,
  marginLeft: "76rem"
}


const Layout = ({children}) => {

  return (
    
      <div>
          <nav style={{marginTop: -50,marginBottom: 100}}>
            <Link to="/" style={navStyles}>home</Link>
            <Link to="/about" style={navStyles}>about</Link>
            <Link to="/projects" style={navStyles}>projects</Link>
            {/* <id style={navStyles}><AnchorLink to="/#connect" style={navStyles}>contact</AnchorLink></id> */}
          </nav>

          <main>{children}</main>
      </div>
  )
}

export default Layout