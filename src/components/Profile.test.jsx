import React from "react";
import { render, screen, getByAltText } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import theme from "../styles/themes";

import Profile from "./Profile";

const mockStore = configureMockStore();

describe("<Profile />", () => {
  const store = mockStore({
    user: {
      profile: {
        _id: "id",
        name: "test",
        photoUrl: "photo",
      },
    },
  });

  it("should be render profile component", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Profile />
        </ThemeProvider>
      </Provider>,
    );

    const image = screen.getByRole("img");

    expect(image.src).toContain("photo");
    expect(screen.getByText("Current name: test")).toBeInTheDocument();
  });
});
