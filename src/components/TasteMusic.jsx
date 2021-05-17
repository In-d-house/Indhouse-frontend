import React, { useEffect } from "react";

import Title from "./shared/Title";
import SelectMaker from "./shared/SelectMaker";

import { title, dateType } from "../constants";
import makeYearRange from "../utils/makeYearRange";
import useMusicClassification from "../hooks/useMusicClassification";

const types = [dateType.year, dateType.month];
const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const TasteMusic = ({ createdAt, likeMusic }) => {
  const {
    classificatedMusic,
    type,
    setType,
    setYear,
    setMonth,
  } = useMusicClassification(likeMusic);

  const years = makeYearRange(createdAt);

  return (
    <>
      <Title title={title.tasteMusic} />
      <SelectMaker name={"type"} options={types} setValue={setType} />
      <div>
        {type === dateType.year && <SelectMaker name={"year"} options={years} setValue={setYear} />}
        {type === dateType.month && <SelectMaker name={"year"} options={years} setValue={setYear} />}
        {type === dateType.month && <SelectMaker name={"month"} options={months} setValue={setMonth} />}
      </div>
      <div>
        D3
      </div>
    </>
  );
};

export default TasteMusic;
