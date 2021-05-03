import React from "react";
import { act, render, RenderOptions, screen } from "@testing-library/react";
import App from "../App";
import { unmountComponentAtNode } from "react-dom";

let container: any;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders learn react link", () => {
  act(() => {
    render(<App />, container);
  });
  console.log(container.innerHTML);
  // const linkElement = screen.getByText(/Skills/i);
  // expect(linkElement).toBeInTheDocument();
});
