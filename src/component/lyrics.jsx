import axios from 'axios'
// import track_id from './Tracklist.jsx'
import React from 'react'
// import App from './app.js'

// function Handleclick(props) {
//     useEffect(function() {
//         const id='[201234497,201621042,200360817]'
//         const API_KEY= 'fddd8ab1808d8700b4112d8f508a8659'
//         const API_URL1='https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + id + API_KEY
  
//         axios.get(API_URL1) .then((res)=> {
//           setCurrentTrack(res.data.message.body.lyrics)
//         })
//       }, [])
  
//     const handleclick = () => {
//         props.setCurrentTrack(props.lyrics_body)}
//         return (
//         <button onClick= {handleclick}>Show Lyrics{props.lyrics_body}</button>
//         )
        
// }


async function showLyrics(id) {
    

    const res=await axios.get('api/${id}')
    console.log(res.data.message.body.lyrics)
}
export default showLyrics