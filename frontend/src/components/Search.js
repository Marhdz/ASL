import React from 'react'

function Search(props) {
  return (
    <div className="input-group md-form form-sm form-1 pl-0">
      <div className="input-group-prepend">
        <span className="input-group-text cyan lighten-2" id="basic-text1"><i className="fas fa-search text-white"
        aria-hidden="true"></i></span>
      </div>
     <input className="form-control my-0 py-1" type="text" placeholder={props.placeh} aria-label="Search"/>
    </div>
  );
}

export default Search
