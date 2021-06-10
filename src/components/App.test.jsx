import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import theme from "../styles/themes";

import App from "./App";

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe("<App />", () => {
  const store = mockStore({
    user: false,
  });

  it("should be render landing page if user is false", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <App />
          </Router>
        </ThemeProvider>
      </Provider>,
    );
    history.push("/");

    expect(screen.getByText("Find your taste")).toBeInTheDocument();
    expect(screen.getByText("This House.")).toBeInTheDocument();
  });

  it("should be render each component matching correct path", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <App />
          </Router>
        </ThemeProvider>
      </Provider>,
    );

    history.push("/login");
    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();

    history.push("/signup");
    expect(screen.getByText("Create")).toBeInTheDocument();
    expect(screen.getByText("Account")).toBeInTheDocument();
  });

  it("should be rendered genre choose page if user is first login", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <App />
          </Router>
        </ThemeProvider>
      </Provider>,
    );

    history.push("/users/choose_genre/test");
    expect(screen.getByText("Choose")).toBeInTheDocument();
    expect(screen.getByText("Your taste")).toBeInTheDocument();
  });

  it("should operate a button to go correct page", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <App />
          </Router>
        </ThemeProvider>
      </Provider>,
    );

    history.push("/");

    const mainButton = screen.getByText("Get Taste Free").closest("a");
    expect(mainButton).not.toBeNull();
    expect((mainButton).getAttribute("href")).toEqual("/login");

    userEvent.click(mainButton);
    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();

    const signupButton = screen.getByText("Signup").closest("a");
    expect(signupButton).not.toBeNull();
    expect((signupButton).getAttribute("href")).toEqual("/signup");

    userEvent.click(signupButton);
    expect(screen.getByText("Create")).toBeInTheDocument();
    expect(screen.getByText("Account")).toBeInTheDocument();

    const loginButton = screen.getByText("Login").closest("a");
    expect(loginButton).not.toBeNull();
    expect((loginButton).getAttribute("href")).toEqual("/login");

    userEvent.click(loginButton);
    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();

    const vacoButton = screen.getByText("Vaco").closest("a");
    expect(vacoButton).not.toBeNull();
    expect((vacoButton).getAttribute("href")).toEqual("https://www.vanillacoding.co/");

    const githubButton = screen.getByText("Git hub").closest("a");
    expect(githubButton).not.toBeNull();
    expect((githubButton).getAttribute("href")).toEqual("https://github.com/In-d-house");
  });
});
