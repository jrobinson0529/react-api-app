import React, { useState, useEffect } from 'react';
import getLyrics from '../../../helpers/data/lyricsData';
import LyricForm from './LyricForm';

function Lyrics() {
  const [lyrics, setLyrics] = useState();
  const [artist, setArtist] = useState('Coldplay');
  const [song, setSong] = useState('Adventure of a Lifetime');
  useEffect(() => {
    getLyrics('Coldplay', 'Adventure of a Lifetime').then((response) => setLyrics(response));
  }, []);
  return (
    <div className='lyrics-app'>
      <LyricForm
      setLyrics={setLyrics}
      setSong={setSong}
      setArtist={setArtist}
      artist={artist}
      song={song}/>
      <div className='lyrics-container'>
        <h1>{artist}</h1>
        <h3>{song}</h3>
        {lyrics}
      </div>
    </div>
  );
}

export default Lyrics;
