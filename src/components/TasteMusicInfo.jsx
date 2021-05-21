import React from "react";
import styled from "styled-components";

import { colorPallete } from "../constants";

const Wrapper = styled.div`
  margin-left: 3rem;

  .date {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.tasteTitleSize};
  }

  .genre-info {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.strong};
  }
`;

const TasteMusicInfo = ({ year, month, infoData }) => {
  return (
    <Wrapper>
      <span className="date">{`${year}. ${month}`}</span>
      <div className="test">
        {infoData.map((genre, i) => {
          return (
            <div
              key={`${i}${genre.genre}`}
              className="genre-info"
            >
              {`${genre.genre}: ${Math.round(genre.percentage)}`}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default TasteMusicInfo;
