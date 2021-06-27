import './App.css';
import { useState } from 'react';
import Song from "./Song.js";
import { Switch, Route, Link, useParams } from "react-router-dom";

function Home(props) {
 
  const params = useParams();
  console.log(parseInt(params.number));

  const [currentSong, setCurrentSong] = useState(parseInt(params.number));

  return <div className="home">
    <h1>The Greatest 60s Rock Songs</h1>
   
    <div className="song-section">
      
      {props.array.map((index, key) => {
        if (key === currentSong) {
            return (
              <div key={key} className="song-card">
              <p>Rank: #{key+1} greatest rock song of the 60s</p>
              
              <h2><b><Link to ={`song/${index.title}`}>"{index.title}"</Link></b> by {index.artist}</h2>
              <iframe width="560" height="315" src={index.embedlink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className={currentSong === 0 ? "prev-next-first-screen" : "prev-next"}>
                  {currentSong !== 0 ? <img onClick={function (e) { e.preventDefault();setCurrentSong(currentSong-1)}}className="previous-button" alt="previous" src="https://img.icons8.com/ios/452/circled-right-2.png"/> : null}
                   <img onClick={function (e) { e.preventDefault(); setCurrentSong(currentSong + 1) }} className="forward-button" alt="forward" src="https://img.icons8.com/ios/452/circled-right-2.png" /> 
                 
              </div>
          </div>)
          }
        else {
          return <div></div>
          }

      })}
      {currentSong === props.size ? <div id="final">
        <h2>Agree? Disagree?</h2>
        <img alt="The Doors singing The End" src="https://media4.giphy.com/media/to5hMDO0bKXV6/giphy.gif?cid=790b7611c95d45146d15715a190e3311a7c8c7902983793c&rid=giphy.gif&ct=g"/>
        
        <button>Add a song</button>
        <button>Delete a song</button>
        <img onClick={function (e) { e.preventDefault();setCurrentSong(currentSong-1)}} id="final-button" alt="previous" src="https://img.icons8.com/ios/452/circled-right-2.png"/>
      </div> : null}
      
    </div>
  </div>
}
export default Home;