import React, { useState } from "react";

import MusicCoverForm from "./MusicCoverForm";

import api from "../../api";

const MusicForm = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    if (!photo) return;

    const file = new FormData();
    file.append("photo", photo);

    const { location } = await api.uploadMusicCoverPhoto({ file });

    const music = {
      title,
      artist,
      genre,
      coverPhotoUrl: location,
    };

    api.createMusic(music);
  };

  return (
    <>
      <h1>Music Create</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" >Title</label>
        <input
          type="text"
          name="title"

          onChange={({ target }) => setTitle(target.value)}
        />
        <label htmlFor="artist" >Artist</label>
        <input
          type="text"
          name="artist"

          onChange={({ target }) => setArtist(target.value)}
        />
        <label htmlFor="genre" >Genre</label>
        <input
          type="text"
          name="genre"

          onChange={({ target }) => setGenre(target.value)}
        />
        <button type="submit" >Create Musics</button>
      </form>
      <MusicCoverForm setPhoto={setPhoto} />
    </>
  );
};

export default MusicForm;
