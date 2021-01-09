// import Axios from 'axios'
// import Track from './Tracklist.jsx'
// import React, { useRef, useState } from 'react'


// function ShowLyrics () {
//   const [open,setOpen] = useState(false) 

  
//   let btn= useRef(null)

//  const handleClick = (track_id) => {
//     track_id=btn.current.value
//     const API_KEY= 'apikey=fddd8ab1808d8700b4112d8f508a8659'
//     Axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + track_id + '&' + API_KEY )
//     .then ((response) => {
//       setLyrics(response.data.message.body.lyrics.lyrics_body)
//       setOpen(!open)
//     })

//     // props.setCurrentTrack(props.lyrics)
  
//   }

//     return (
//         <div>      
  
//         </div>

//     )
// }
// export default ShowLyrics
