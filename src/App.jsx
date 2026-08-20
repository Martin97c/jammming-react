import { useState } from 'react'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'
import './App.css'

function App() {
  const playlistName = "My Playlist";

  const [playlistTracks, setPlaylistTracks] = useState ([
    {
      id: 4,
      name: "The Scientist",
      artist: "Coldplay",
      album: "A Rush of Blood to the Head"
    }
  ]);
  
  const searchResults = [
    {
      id: 1,
      name: "Yellow",
      artist: "Coldplay",
      album: "Parachutes"
    },
    {
      id: 2,
      name: "Clocks",
      artist: "Coldplay",
      album: "A Rush of Blood to the Head"
    },
    {
      id: 3,
      name: "Paradise",
      artist: "Coldplay",
      album: "Mylo Xyloto"
    },
  ];

  function addTrack(track) {
    const isTrackInPlaylist = playlistTracks.some((playlistTrack) => {
      return playlistTrack.id === track.id;
    });

    if(!isTrackInPlaylist) {
      setPlaylistTracks([...playlistTracks, track]);
    }

  };

  return (
    <div className='app'>
      <h1>Jammming</h1>
      <SearchBar />
      <SearchResults 
        searchResults={searchResults}
        onAdd={addTrack}
      />
      <Playlist
        playlistName={playlistName}
        playlistTracks={playlistTracks}
      />
    </div>
  );
}

export default App
