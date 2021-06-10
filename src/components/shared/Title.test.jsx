import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";

import Title from "./Title";

import theme from "../../styles/themes";

describe("<Title />", () => {
  it("should show title text", () => {
    const { getByText } = render(<ThemeProvider theme={theme} >
        <Title title="test" />
      </ThemeProvider>);

    expect(getByText("test")).toBeInTheDocument();
  });
});
