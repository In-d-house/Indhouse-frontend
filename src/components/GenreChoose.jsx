import React from "react";

import useGenreChoose from "../hooks/useGenreChoose";

const GenreChoose = () => {
  const { refs, genre, handleSubmit } = useGenreChoose();

  return (
    <>
      <h1>Choose</h1>
      <h1>Your taste</h1>
      <form onSubmit={handleSubmit}>
        {genre.map((item, idx) => {
          return (
            <label
              key={item.name}
            >
              <input
                key={item._id}
                name={item._id}
                type="checkbox"
                ref={refs[idx]}
              />
              <span>{item.name}</span>
            </label>
          );
        })}
        <button type="submit" >Done</button>
      </form>
    </>
  );
};

export default GenreChoose;
