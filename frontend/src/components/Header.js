import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark mb-3 py-0"
    style={{backgroundColor:'tomato'}}>
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired //so it adds a warning when is not a string :D
};

export default Header;
