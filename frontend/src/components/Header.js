import React from 'react';
import PropTypes from 'prop-types';
import App from '../App';


const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark mb-3 py-0"
    style={{backgroundColor:'tomato'}}>
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.branding}
        </a>
        <div>
              <form className="form-inline md-form form-sm active-pink active-pink-2 mt-2">
                <i className="fas fa-search"></i>
                <button onClick={this.handleClick}/>
                // <input className="form-control form-control-sm ml-3 w-75" type="text" onClick={App.handleChange} placeholder="Search" aria-label="Search"></input>
              </form>
        </div>
      </div>
    </nav>
  );
};
handleClick() {
  console.log('Click happened');
};
Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired //so it adds a warning when is not a string :D
};

export default Header;
