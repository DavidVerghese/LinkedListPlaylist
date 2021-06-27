import './App.css';
import {Link, useParams } from "react-router-dom";

function Song(props) {
  const params = useParams();

  return <div>
    {props.array.map((index, key) => {
      if (index.title === params.title) {
        return (
          <div key={key} className="individual-song">
            
           
            
            <div className="song-info">
              <h2><b>"{index.title}"</b> by {index.artist}</h2>
              <p>Rank: #{props.playlist.indexOf(index.title) + 1} greatest song of the 60s</p>
              <p><Link to = {`/playlist/${key}`}>Back</Link></p> 
 <iframe width="560" height="315" src={index.embedlink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p><b>Album:</b> {index.album}</p>
            <p><b>Year:</b>{index.year}</p>
            <p><b>Genre:</b> {index.genre}</p>

           </div>
            
          </div>)
        
      }
      else {
        return <div key={key}></div>
      }

    })}
    </div>  

        
}
export default Song;