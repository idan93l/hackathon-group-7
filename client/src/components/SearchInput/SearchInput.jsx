import React from "react";
import "./searchInput.css";

const SearchInput = (props) => {    
    return (
        <div className="search-container">
            <input className="search-input"></input>
            <div role={"button"} onClick={props.handleClick} className="search-button">Search</div>
        </div>
    );
};

export default SearchInput;
