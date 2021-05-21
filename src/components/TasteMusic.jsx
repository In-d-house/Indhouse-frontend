import React from "react";
import styled from "styled-components";

import Title from "./shared/Title";
import SelectMaker from "./shared/SelectMaker";
import TasteMusicInfo from "./TasteMusicInfo";
import TasteD3 from "./TasteD3";

import { title, dateType } from "../constants";
import makeYearRange from "../utils/makeYearRange";
import useMusicClassification from "../hooks/useMusicClassification";

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
    classificatedData,
    type,
    year,
    month,
    setType,
    setYear,
    setMonth,
  } = useMusicClassification(likeMusic);

  const years = makeYearRange(createdAt);

  return (
    <>
      <Title title={title.tasteMusic} />
      <SelectMaker name={"type"} options={dateTypes} setValue={setType} />
      <div>
        {type === dateType.year && <SelectMaker name={"year"} options={years} setValue={setYear} />}
        {type === dateType.month && <SelectMaker name={"year"} options={years} setValue={setYear} />}
        {type === dateType.month && <SelectMaker name={"month"} options={months} setValue={setMonth} />}
      </div>
      <Content>
        {!!classificatedData.length && <TasteD3 tasteData={classificatedData} />}
        {!!classificatedData.length && <TasteMusicInfo
          year={year}
          month={month}
          classificatedData={classificatedData}
        />}
      </Content>
    </>
  );
};

export default TasteMusic;
