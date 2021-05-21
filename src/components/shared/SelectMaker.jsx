import React from "react";
import styled from "styled-components";

const Select = styled.select`
  margin: 0.5rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.indigo};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.strong};
`;

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
