import { render, screen } from "@testing-library/react";
import App from "../App";

beforeEach(() => {
  // setup a DOM element as a render target
});

afterEach(() => {
  // cleanup on exiting
});

test("renders learn react link", () => {
  const { container, getAllByRole } = render(<App />);
  const buttons = getAllByRole("button");

  const headerButtons = buttons.slice(0, 3);

  const expectHeadderButtons = ["ABOUT", "SKILLS", "WORKS"];

  let count = 0;
  for (let button of headerButtons) {
    expect(button.outerHTML).toContain(expectHeadderButtons[count]);
    count++;
  }
  expect(container.innerHTML).toMatchSnapshot();
});
