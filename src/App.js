import './App.css';
import { Route, Link } from "react-router-dom";
import Playlist from "./Playlist.js";
import Song from "./Song.js";
import SearchResults from "./SearchResults.js";
import Home from "./Home.js";

import { useState } from "react";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  class Node {
    constructor(image,title,artist,genre,album,year,embedlink,extrapics, alt)
    {
      this.image = image;
      this.title = title;
      this.artist = artist;
      this.genre = genre;
      this.album = album;
      this.year = year;
      this.embedlink = embedlink;
      this.extrapics = extrapics;
      this.alt = alt;
        this.next = null
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    add(image,title,artist,genre,album,year,embedlink,extrapics,alt)
{
    var node = new Node(image,title,artist,genre,album,year,embedlink,extrapics,alt);
    var current;
    if (this.head == null)
        this.head = node;
    else {
        current = this.head;
        while (current.next) {
          current = current.next;
        }
      current.next = node;
    }
    this.size++;
    }
    returnList()
{
    var curr = this.head;
    var array = [];
    while (curr) {
      array.push(curr);
        curr = curr.next;
    }
    return array;
    }
    size_of_list()
{
    return this.size;
    }
    indexOf(title)
{
    var count = 0;
    var current = this.head;
    while (current != null) {
      if (current.title === title) {
           return count;
        } 
        count++;
        current = current.next;
    }
    return -1;
    }
    search(webQuery)
{
      var current = this.head;
      let webQueryArray = webQuery.toLowerCase().split(" ");
      let searchResult = [];

      function compareArrays(array1, array2) {
        let matches = [];
        for (let i = 0; i < array1.length; i++){
          
          for (let j = 0; j < array2.length; j++){
            if (array1[i] === array2[j]) {
              matches.push(array1[i]);
            }
          }
        }
        return matches;
      }

      while (current != null) {
        let title = current.title.toLowerCase().split(" ");
        let artist = current.artist.toLowerCase().split(" ");
        let album = current.album.toLowerCase().split(" ");

        let matchesForTitle = compareArrays(title, webQueryArray);
        let matchesForArtist = compareArrays(artist, webQueryArray);
        let matchesForAlbum = compareArrays(album, webQueryArray);

      if (matchesForTitle.length !== 0 || matchesForArtist.length !== 0  || matchesForAlbum.length !== 0  || current.year === webQuery) {
        searchResult.push(current);
      }
        current = current.next;
      }
      return searchResult;
}
  }


  let playlist = new LinkedList();

  
  playlist.add("https://www.hollywoodreporter.com/wp-content/uploads/2012/09/god-only-knows-the-beach-boys.jpg", "God Only Knows", "Beach Boys", "Baroque pop, advant-pop", "Pet Sounds", 1966, "https://www.youtube.com/embed/AOMyS78o5YI",["https://upload.wikimedia.org/wikipedia/en/b/bb/PetSoundsCover.jpg","https://www.rollingstone.com/wp-content/uploads/2020/05/BeachBoys.jpg?resize=1800,1200&w=1800","https://www.rollingstone.com/wp-content/uploads/2018/08/GettyImages-91061602.jpg"],["God Only Knows cover art","Pet Sounds album cover","Beach Boys posing with surfboard","Beach Boys"]);
  playlist.add("https://m.media-amazon.com/images/M/MV5BYTAzZmY2MmEtZmFhZS00YTAyLTllZDItODY3NjA2ZjI2ZTUxXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg", "A Day in The Life", "Beatles", "Art rock, psychedelic rock, orchestral pop", "Sgt. Pepper's Lonely Hearts Club Band", 1967, "https://www.youtube.com/embed/YSGHER4BWME",["https://images-na.ssl-images-amazon.com/images/I/81ZVwENsT-L._SL1200_.jpg","https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg","https://upload.wikimedia.org/wikipedia/commons/d/df/The_Fabs.JPG"],["Cover art to a Beatles EP","Beatles album cover art","Beatles","Beatles"]);
  playlist.add("https://static.dw.com/image/54959312_101.jpg", "All Along the Watchtower", "Jimi Hendrix", "Hard rock", "Electric Ladyland",  1968 , "https://www.youtube.com/embed/TLV4_xaYynY",["https://static.independent.co.uk/2020/09/16/12/newFile.jpg?width=1200&auto=webp&quality=75","https://static.messynessychic.com/wp-content/uploads/2012/06/20120625-190822.jpg","https://img.discogs.com/7xRpnQerBO-GxsgIlgJwLMEWBJo=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-255672-1608041743-3609.jpeg.jpg"],["Jimi Hendrix","Jimi Hendrix","Jimi Hendrix in military uniform","Jimi Hendrix with bandmembers"]);
  
  let songs = playlist.returnList();
  let size = playlist.size_of_list();


  return (
    <div>
      <header className="nav">

        <h2><Link to="/">Home</Link></h2>
        <h2>LinkedList</h2>
        <div className="search">
          <label htmlFor="searchbar"> <p>Search for a song: </p></label>
         
          <input id="searchbar" placeholder="name, genre, album, year" value={searchValue} onChange={function (e) { e.preventDefault(); setSearchValue(e.target.value)}}/>
          
          <Link to = "/searchresults"><button onClick={function (e) { let search = playlist.search(searchValue); setSearchResults(search) }}>Submit</button></Link>
        </div>
        
      </header>
      <div>
      <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/playlist/:number">
          <Playlist array={songs} size={size} startingSong={0}/>
        </Route>
        <Route exact path="/:title">
          <Song array={songs} playlist={playlist}/>
        </Route>
        <Route exact path = "/searchresults">
          <SearchResults array={searchResults} playlist={playlist}/>
        </Route>
              
      </div>
      <footer>
        David Verghese
      </footer>
    </div>
  );
}

export default App;
