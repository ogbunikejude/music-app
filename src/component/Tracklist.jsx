import React from 'react'
import mp from '../mp.png'


function Track(props) {
  const handleclick = () => {
    props.setCurrentTrack(props.lyrics)}
  
   
   return (         
    <div className="row">
    <img src={mp}/>
    <h4>Track name: {props.track.track.track_name}</h4>
   
  <p>Artist: {props.track.track.artist_name}</p>
  <p>Track ID: {props.track.track.track_id}</p>
  <button onClick= {handleclick}>Show Lyrics</button>

</div>
   )
}

export default Track
