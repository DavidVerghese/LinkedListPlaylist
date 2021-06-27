import './App.css';
import { Switch, Route, Link, useParams } from "react-router-dom";

function Song(props) {
  const params = useParams();
  console.log(params.title);

  return <div>
    {props.array.map((index, key) => {
      if (index.title === params.title) {
        return (
          <div className="individual-song">
            
           
            
            <div className="song-info">
              <h2><b>"{index.title}"</b> by {index.artist}</h2>
              <p>Rank: #{props.playlist.indexOf(index.title) + 1} greatest song of the 60s</p>
              <p><Link to = {`/${key}`}>Back</Link></p> 
 <iframe width="560" height="315" src={index.embedlink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p><b>Album:</b> {index.album}</p>
            <p><b>Year:</b>{index.year}</p>
            <p><b>Genre:</b> {index.genre}</p>

           </div>
            
          </div>)
        
      }

    })}
    </div>  

        
}
export default Song;