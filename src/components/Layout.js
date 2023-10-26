import React from 'react'
import {Link} from 'gatsby'

const navStyles = {
fontSize: "1.3rem",
fontWeight: "bold",
}


const Layout = ({ children }) => {

  return (
    <div>
      <nav style={{ marginTop: -50, marginBottom: 100 }} className="flex space-x-20">
        <Link to="/" style={navStyles}
        activeStyle={{color: "#6366f1"}}>
          home
        </Link>
        
        <Link to="/about" style={navStyles}
          activeStyle={{color: "#6366f1"}}>
          about
        </Link>
        
        <Link to="/projects" style={navStyles}
        activeStyle={{color: "#6366f1"}}>
          projects
        </Link>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default Layout