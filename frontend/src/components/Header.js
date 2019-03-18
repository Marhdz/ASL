import React, { Component } from "react";
import PropTypes from 'prop-types';
import App from '../App';
import Search from './Search'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      branding:''
    };
  }
  handleChange(e){
   this.setState({[e.target.name]: e.target.value})
   console.log(e.target.value);
}
  render () {
    return(
        <nav className="navbar navbar-expand-sm navbar-dark mb-3 py-0"
        style={{backgroundColor:'tomato'}}>
        <div className="container">
          <a href="/" className="navbar-brand">
            ASL
          </a>
          <div>
            <Search placeh={"Search"} onChange={(e) => this.handleChange(e)}/>
          </div>
        </div>
      </nav>
    )
  }
};


Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired //so it adds a warning when is not a string :D
};

export default Header;
