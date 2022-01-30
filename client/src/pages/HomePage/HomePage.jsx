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
                    <h2 className="item-title">Search!</h2>
                    <p className="item-desc">
                        Search for the song of your choosing!
                    </p>
                </div>
                <div className="about-item">
                    <h2 className="item-title">Tranlsate!</h2>
                    <p className="item-desc">
                        Translate the song to any language we provide!
                    </p>
                </div>
                <div className="about-item">
                    <h2 className="item-title">Discuss!</h2>
                    <p className="item-desc">
                        Comment on songs and see what others say!
                    </p>
                </div>
            </div>
            <div className="bottom-section">
                <div>
                    <h1 className="main-title">What are you waiting for?</h1>
                    <p className="sub-title">Get started now!</p>
                </div>
                <SearchInput />
            </div>
        </div>
    );
};

export default HomePage;
