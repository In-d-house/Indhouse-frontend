import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";

import Music from "./Music";

import theme from "../../styles/themes";

const musicMockData = {
  _id: "id",
  title: "title",
  coverPhotoUrl: "cover",
  youtubeUrl: "youtube",
};

describe("<Music />", () => {
  it("should render music info", () => {
    const onClick = jest.fn();
    render(<ThemeProvider theme={theme} >
        <Music info={musicMockData} isLike={true} onClick={onClick} />
      </ThemeProvider>);

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("PLAY").closest("a").getAttribute("href")).toEqual("youtube");

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
