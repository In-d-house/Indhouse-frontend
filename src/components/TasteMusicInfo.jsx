import React from "react";

const TasteMusicInfo = ({ year, month, classificatedData }) => {
  return (
    <>
      <span>{`${year}. ${month}`}</span>
      <div>
        {classificatedData.map((genre, i) => {
          return (
            <div key={i}>
              {genre.genre}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TasteMusicInfo;
