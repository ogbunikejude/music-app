
import React from 'react'
import { useEffect, useState } from "react"
import axios from 'axios'
import image from './banner.png'
import Track from './component/Tracklist'
import { ReactComponent as SearchIcon } from './SearchIcon.svg';
import './App.css';

function App() {
  const [tracks, setTracks] = useState(null)
    useEffect(function() {
  const API_URL='https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=fddd8ab1808d8700b4112d8f508a8659'
axios.get(API_URL).then((res) => {
    setTracks(res.data.message.body.track_list)
})

    }, [])
    
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="Row">
          <a href="/" className="logo">Jude Music Blog</a>
          <div className="searchbar">
          <input type="text" name="Search" placeholder="Search Music.." ></input>
          <button type="submit"><SearchIcon style={{ width: '2rem' }} /></button>
          </div>
          <nav>
            <a href="/">Home</a>
            <a href="/">Charts </a>
            <a href="/">Lyrics</a>
            <a href="/">Latest</a>
          </nav>
          </div>
        </div>
      </header>
      <section className="banner" >
        <div className="banner1"> 
        <img src={image} alt="banner"/>
        </div>
      </section>
      <section className="track-list">
        <div className="container">
          <h1 className="section-title">US Music Chart </h1>
          <h3 className="subsection-title">Top Trending Tracks in the US</h3>
          <div className="row">
  <div className="music-card">
  <div>
            {tracks ? tracks.map((track) => <Track track={track} />) : <p>loading...</p>}
           
        </div>
       
        </div>

  </div>

</div>
          
  
      </section>
      <footer>
      <div className="container">
      <div className="Row">
          <nav>
            <a href="/">About</a>
            <a href="/">Contact Us</a>
            <a href="/">Help</a>
            <a href="/">Popular Searches</a>
            <a href="/">Blog</a>
          </nav>
          </div>  
      </div>
      </footer>
    </div>
  );
}

export default App;
