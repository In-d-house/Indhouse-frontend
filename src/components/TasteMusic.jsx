import React from "react";
import styled from "styled-components";

import D3 from "./D3";
import Title from "./shared/Title";
import SelectMaker from "./shared/SelectMaker";

import { title, dateType } from "../constants";
import makeYearRange from "../utils/makeYearRange";
import useMusicClassification from "../hooks/useMusicClassification";

const Wrapper = styled.div`
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 100px;
  }
`;

const dateTypes = [dateType.year, dateType.month];
const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const TasteMusic = ({ createdAt, likeMusic }) => {
  const {
    classificatedMusic,
    type,
    year,
    month,
    setType,
    setYear,
    setMonth,
  } = useMusicClassification(likeMusic);

  const years = makeYearRange(createdAt);

  return (
    <Wrapper>
      <Title title={title.tasteMusic} />
      <SelectMaker name={"type"} options={dateTypes} setValue={setType} />
      <div>
        {type === dateType.year && <SelectMaker name={"year"} options={years} setValue={setYear} />}
        {type === dateType.month && <SelectMaker name={"year"} options={years} setValue={setYear} />}
        {type === dateType.month && <SelectMaker name={"month"} options={months} setValue={setMonth} />}
      </div>
      <Content>
        {!!classificatedMusic.length && <D3 tasteData={classificatedMusic} />}
        {!!classificatedMusic.length && <div>
          <span>{`${year}. ${month}`}</span>
          <div>
            {classificatedMusic.map((genre, i) => {
              return (
                <div key={i}>
                  {genre.genre}
                </div>
              );
            })}
          </div>
        </div>}
      </Content>
    </Wrapper>
  );
};

export default TasteMusic;
