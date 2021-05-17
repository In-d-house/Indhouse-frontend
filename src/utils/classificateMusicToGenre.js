const classificateMusicToGenre = (genres, musics) => {
  const genreMap = new Map();
  const genreNameMap = new Map();

  genres.forEach(genre => {
    genreMap.set(genre._id, 0);
    genreNameMap.set(genre._id, genre.name);
  });

  musics.forEach(music => {
    const prevCount = genreMap.get(music.genre);

    genreMap.set(music.genre, prevCount + 1);
  });

  const classificatedMusic = [...genreMap].map(genre => {
    const genreName = genreNameMap.get(genre[0]);

    return [genreName, genre[1]];
  });

  return classificatedMusic;
};

export default classificateMusicToGenre;
