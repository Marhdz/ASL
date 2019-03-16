import React from 'react';
import PropTypes from 'prop-types';
import App from '../App';
import Search from './Search'


const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark mb-3 py-0"
    style={{backgroundColor:'tomato'}}>
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.branding}
        </a>
        <div>
          <Search placeh={"Search"}/>
        </div>
      </div>
    </nav>
  )
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired //so it adds a warning when is not a string :D
};

export default Header;
