import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Search from "./pages/Search/Search";
import Song from "./pages/Song/Song";
import SongList from "./pages/SongList/SongList";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/search" exact element={<Search />} />
          <Route path="/song" exact element={<Song />} />
          <Route path="/songlist" exact element={<SongList />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
