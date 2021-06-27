import {Link, useParams } from "react-router-dom";
import './App.css';

function SearchResults(props) {

  const params = useParams();

  return <div className="searchresult">
    <h1>Search Results: </h1>
    {props.array.length === 0 ? <div><p>No Results Found</p><img src="https://i.pinimg.com/originals/ab/ae/1a/abae1a8aa6b8f5513b629931dc185747.gif"/></div> :  
     props.array.map((index) => {
      
      return (<div className="search-result-entry">

        <h2><b><Link to={`/${index.title}`}>"{index.title}"</Link></b> by {index.artist}</h2>
        <p>Rank: #{props.playlist.indexOf(index.title) + 1} greatest song of the 60s</p>
        <iframe width="560" height="315" src={index.embedlink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p><b>Album:</b> {index.album}</p>
            <p><b>Year:</b>{index.year}</p>
        <p><b>Genre:</b> {index.genre}</p>
        
      </div>)


    })
    }
   
  </div>
}
export default SearchResults;