import React, { useState, useEffect } from "react";

import Title from "./shared/Title";

import { title } from "../constants";

const TasteMusic = ({ createdAt }) => {
  const [type, setType] = useState("");
  const [month, setMonth] = useState("");

  return (
    <>
      <Title title={title.tasteMusic} />
      <div>
        <select onChange={({ target }) => setType(target.value)} >
          <option value="month" >Month</option>
          <option value="year" >Year</option>
        </select>
        <form>
          <input
            type={type}
            max={createdAt}
            onChange={({ target }) => setMonth(target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default TasteMusic;
