import './App.css';
import { useState } from 'react';
import {Link, useParams } from "react-router-dom";

function Playlist(props) {
 
  const params = useParams();

  const [currentSong, setCurrentSong] = useState(parseInt(params.number));

  return <div className="playlist">
   
    <div className="song-section">
      
      {props.array.map((index, key) => {
        if (key === currentSong) {
            return (
              <div key={key} className="song-card">

                <div className="song-grid">
                  <img alt={index.alt[0]} src={index.image} />
                  <img alt={index.alt[1]} src={index.extrapics[0]} />
                  <img alt={index.alt[2]}  src={index.extrapics[1]} />
                  <img alt={index.alt[3]} src={index.extrapics[2]} />
                  
                </div>
                <div className="playlistinfo">
              <p>Rank: #{key+1} greatest rock song of the 60s</p>
              
              <h2><b><Link to ={`/${index.title}`}>"{index.title}"</Link></b> by {index.artist}</h2>
              
                <iframe width="560" height="315" src={index.embedlink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  <Link to ={`/${index.title}`}><button>Why I picked this song</button></Link>
                  <div className={currentSong === 0 ? "prev-next-first-screen" : "prev-next"}>
                  {currentSong !== 0 ? <img onClick={function (e) { e.preventDefault();setCurrentSong(currentSong-1)}}className="previous-button" alt="previous" src="https://img.icons8.com/ios/452/circled-right-2.png"/> : null}
                   <img onClick={function (e) { e.preventDefault(); setCurrentSong(currentSong + 1) }} className="forward-button" alt="forward button" src="https://img.icons8.com/ios/452/circled-right-2.png" /> 
                  
              </div>
                </div>
              </div>)
          }
        else {
          return <div key={key}></div>
          }

      })}
      {currentSong === props.size ? <div id="final">
        <h2>THE END</h2>
        <img alt="The Doors singing The End" src="https://media4.giphy.com/media/to5hMDO0bKXV6/giphy.gif?cid=790b7611c95d45146d15715a190e3311a7c8c7902983793c&rid=giphy.gif&ct=g"/>
        
        <img onClick={function (e) { e.preventDefault();setCurrentSong(currentSong-1)}} id="final-button" alt="previous button" src="https://img.icons8.com/ios/452/circled-right-2.png"/>
      </div> : null}
      
    </div>
  </div>
}
export default Playlist;