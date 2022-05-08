import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders spinner on initialization", () => {
  render(<App />);
  const loadingElement = screen.getByTestId("loading");
  expect(loadingElement).toBeInTheDocument();
});
