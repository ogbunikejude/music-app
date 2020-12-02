import Axios from 'axios'
import React, { useRef, useState } from 'react'
import mp from '../mp.png'
// import showLyrics from './lyrics'


function Track(props) {
  const [lyrics,setLyrics] = useState(null)
  const [open,setOpen] = useState(false) 

  const displayblock= () => {
    setOpen(!open)
  }
  let btn= useRef(null)

  const handleclick = (track_id) => {
    track_id=btn.current.value
    const API_KEY= 'apikey=fddd8ab1808d8700b4112d8f508a8659'
    Axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + track_id + '&' + API_KEY )
    .then ((response) => {
      setLyrics(response.data.message.body.lyrics.lyrics_body)
      setOpen(!open)
    })

    // props.setCurrentTrack(props.lyrics)
  
  }
    
  
   
   return (         
    <div className="row">
    <img src={mp}/>
    <h4>Track name: {props.track.track.track_name}</h4>
   
  <p>Artist: {props.track.track.artist_name}</p>
  <p>Track ID: {props.track.track.track_id}</p>
  <button className="button" onClick= {handleclick} ref={btn} value={props.track.track.track_id} >Show Lyrics</button>
  <div className={open ? 'display' : 'undisplay'}>
<span className="exit" onClick = {displayblock }>X</span>
<h2>Track Lyrics</h2>
<p>{props.track.track.track_name}</p>
<div>{lyrics}</div>
  </div>

</div>
   )
}

export default Track
