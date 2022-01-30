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
                <p>
                    Search for the song of your choosing, translate it to the
                    language you want and discuss it with others alike.
                </p>
            </div>
        </div>
    );
};

export default HomePage;
