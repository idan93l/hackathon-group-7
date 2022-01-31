import React, {useState} from "react";
import "./searchInput.css";

const SearchInput = (props) => {    
    const [value, setValue] = useState('')
    return (
        <div className="search-container">
            <input onChange={(e) => setValue(e.target.value)} className="search-input" value={value}></input>
            <div role={"button"} onClick={() => props.handleClick(value)} className="search-button">Search</div>
        </div>
    );
};

export default SearchInput;
