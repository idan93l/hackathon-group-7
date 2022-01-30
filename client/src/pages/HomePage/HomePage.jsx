import React from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import "./homepage.css";

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="top-section">
                <div>
                    <h1 className="main-title">Start your journey!</h1>
                    <p className="sub-title">
                        Search for the song of your choosing, translate it to
                        the language you want and discuss it with others alike!
                    </p>
                </div>
                <SearchInput />
            </div>
            <div className="about-section">
                <div className="about-item">
                    <h2>Search!</h2>
                    <p>
                        Search for the song of your choosing!
                    </p>
                </div>
                <div className="about-item">
                    <h2>Tranlsate!</h2>
                    <p>
                        Translate the song to any language we provide!
                    </p>
                </div>
                <div className="about-item">
                    <h2>Discuss!</h2>
                    <p>
                        Comment on songs and see what others say!
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default HomePage;
