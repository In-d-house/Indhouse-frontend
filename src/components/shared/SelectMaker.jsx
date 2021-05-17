import React from "react";
import styled from "styled-components";

const Select = styled.select``;

const SelectMaker = ({ name, options, setValue }) => {
  return (
      <Select onChange={({ target }) => setValue(target.value)} defaultValue="" >
        <option value="" disabled hidden >{`select ${name}`}</option>
        {options.map(option => {
          return (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          );
        })}
      </Select>
  );
};

export default SelectMaker;
