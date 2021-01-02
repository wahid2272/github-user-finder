import React from 'react';
import PropTypes from 'prop-types';


const Navbar = (props) => {
  return (
    <div className="navbar bg-primary">
        <h1>
          <i className={props.icon}></i>
          {props.title}
        </h1>
        
      </div>
    );
  }
  
  Navbar.defaultProps ={
    title: 'Github Finder',
    icon: 'fab fa-github'
  }
  
  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  export default Navbar;