import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Search from "./components/Search";
import Song from "./components/Song";
import SongList from "./components/SongList";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" exact component={Search} />
          <Route path="/Song" exact component={Song}/>
          <Route path="/songList" exact component={SongList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}