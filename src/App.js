import './App.css';
import { Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Song from "./Song.js";
import { useState } from "react";

function App() {

  class Node {
    constructor(image,title,artist,genre,album,year,embedlink)
    {
      this.image = image;
      this.title = title;
      this.artist = artist;
      this.genre = genre;
      this.album = album;
      this.year = year;
      this.embedlink = embedlink;
        this.next = null
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    add(image,title,artist,genre,album,year,embedlink)
{
    var node = new Node(image,title,artist,genre,album,year,embedlink);
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
  
  }


  let playlist = new LinkedList();
  playlist.add("https://www.udiscovermusic.com/wp-content/uploads/2020/07/Steppenwolf-Born-To-Be-Wild.jpg", "Born to Be Wild", "Steppenwolf", "Hard rock, heavy metal", "Steppenwolf", 1968, "https://www.youtube.com/embed/egMWlD3fLJ8");
  playlist.add("https://www.udiscovermusic.com/wp-content/uploads/2020/07/Steppenwolf-Born-To-Be-Wild.jpg", "Born to eeeBe Wild", "Steppenwolf", "Hard rock, heavy metal", "Steppenwolf", 1968, "https://www.youtube.com/embed/egMWlD3fLJ8");
  playlist.add("https://www.kmuw.org/sites/kmuw/files/201411/KinksYouReallyGotMe.jpg", "You Really Got Me", "The Kinks", "Garage rock, hard rock", "Kinks", 1964, "https://www.youtube.com/embed/fTTsY-oz6Go");
  
  let songs = playlist.returnList();
  let size = playlist.size_of_list();


  return (
    <div>
      <header className="nav">

        <h2><Link to="/">Home</Link></h2>
        <h2>LinkedList</h2>
        <div>
          <p>Search</p>
          <input />
        </div>
        
      </header>
      <div>
      {/* <Route exact path="/">
          <Home array={songs} size={size} startingSong={0}/>
        </Route> */}
        <Route exact path="/:number">
          <Home array={songs} size={size} startingSong={0}/>
        </Route>
        <Route exact path="/song/:title">
          <Song array={songs} playlist={playlist}/>
              </Route>
              
      </div>
    </div>
  );
}

export default App;
