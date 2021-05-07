import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Label,
  Input,
  FormGroup
} from 'reactstrap';
import getLyrics from '../../../helpers/data/lyricsData';

function LyricForm({
  setLyrics,
  setArtist,
  setSong,
  artist,
  song
}) {
  const handleSongChange = (e) => {
    setSong(e.target.value);
  };
  const handleArtistChange = (e) => {
    setArtist(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getLyrics(artist, song).then((response) => setLyrics(response));
  };
  return (
    <div>
      <Form style={{
        width: '50%',
        margin: '0 auto 0 auto'
      }}
      onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="artist">Artist</Label>
        <Input
          type='text'
          name="artist"
          id='artist'
          placeholder='Michelle'
          value={artist}
          onChange={handleArtistChange}
          />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Song</Label>
        <Input
          type='text'
          name="song"
          id='song'
          placeholder='Adventure of a Lifetime'
          value={song}
          onChange={handleSongChange}
          />
      </FormGroup>
      <button type='submit'>submit</button>
      </Form>
    </div>
  );
}
LyricForm.propTypes = {
  setLyrics: PropTypes.func.isRequired,
  setSong: PropTypes.func.isRequired,
  setArtist: PropTypes.func.isRequired,
  artist: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired
};
export default LyricForm;
