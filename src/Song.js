import './App.css';
import {Link, useParams } from "react-router-dom";

function Song(props) {
  const params = useParams();

  return <div className="song">
   
    {props.array.map((index, key) => {
      if (index.title === params.title) {
        return (
          <div key={key} className="individual-song">
            
           
            
            <div className="song-info">
            <p><Link to = {`/playlist/${key}`}>Back</Link></p> 
              <h2><b>"{index.title}"</b> by {index.artist}</h2>
              <h2>Why I picked this song</h2>
     
              {/* <p>Rank: #{props.playlist.indexOf(index.title) + 1} greatest song of the 60s</p> */}
              
              <img alt={index.alt[0]} src={index.image}/>
              {/* <iframe width="560" height="315" src={index.embedlink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            {/* <p><b>Album:</b> {index.album}</p>
            <p><b>Year:</b>{index.year}</p>
            <p><b>Genre:</b> {index.genre}</p> */}

<ol>
        <li>Reason 1</li>
        <li>Reason 2</li>
        <li>Reason 3</li>
      </ol>
           </div>
            
          </div>)
        
      }
      else {
        return <div key={key}></div>
      }

    })}
     <div className="fun-facts">
     
      <h2>Fun facts</h2>
      <ol>
        <li>Reason 1</li>
        <li>Reason 2</li>
        <li>Reason 3</li>
      </ol>
    </div>
    </div>  

        
}
export default Song;