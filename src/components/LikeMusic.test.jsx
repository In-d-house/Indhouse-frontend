import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { ThemeProvider } from "styled-components";

import LikeMusic from "./LikeMusic";

import theme from "../styles/themes";

const musicsMockData = [
  {
    _id: "id",
    title: "title",
    coverPhotoUrl: "cover",
    youtubeUrl: "youtube",
    genreId: "genre",
  },
];

const mockStore = configureMockStore();
const store = mockStore({});

describe("<LikeMusic />", () => {
  it("should render music info", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme} >
          <LikeMusic likeMusic={musicsMockData} />
        </ThemeProvider>
      </Provider>,
    );

    expect(screen.getByText("MY LIKE MUSIC")).toBeInTheDocument();
  });
});
