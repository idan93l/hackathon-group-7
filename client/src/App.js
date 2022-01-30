import "./App.css";
import React, { useState , useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Search from "./pages/Search/Search";
import Song from "./pages/Song/Song";
import SongList from "./pages/SongList/SongList";

function App() {
  const [chosenSong, setChosenSong] = useState({})
  useEffect(() => {
    
  },[chosenSong])
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/search" exact element={<Search setChosenSong={setChosenSong} />} />
          <Route path="/song" exact element={<Song chosenSong={chosenSong} />} />
          <Route path="/songlist" exact element={<SongList setChosenSong={setChosenSong} />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
