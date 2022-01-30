import React from "react";
import { useNavigate} from "react-router-dom";
import "./searchInput.css";

const SearchInput = () => {
    const navigate = useNavigate();
    
    return (
        <div className="search-container">
            <input className="search-input"></input>
            <div role={"button"} onClick={() => navigate("/song")} className="search-button">Search</div>
        </div>
    );
};

export default SearchInput;
