import React from 'react'
import {Link} from 'gatsby'

const navStyles = {
fontSize: "1.3rem",
fontWeight: "bold",
}


const Layout = ({children}) => {

  return (
    
      <div>
          <nav style={{marginTop: -50,marginBottom: 100, navStyles}} class="flex space-x-20">
            <Link to="/" style={navStyles}>home</Link>
            <Link to="/about" style={navStyles}>about</Link>
            <Link to="/projects" style={navStyles}>projects</Link>
          </nav>

          <main>{children}</main>
      </div>
  )
}

export default Layout