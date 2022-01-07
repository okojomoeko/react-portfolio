import { render } from '@testing-library/react';
import pretty from 'pretty';
import App from '../App';
import { intersectionObserverMock } from '../__mocks__/intersectionObserverMock';

beforeEach(() => {
  // setup a DOM element as a render target
  window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
});

afterEach(() => {
  // cleanup on exiting
});

test('renders learn react link', () => {
  const { container, getAllByRole } = render(<App />);

  // const buttons = getAllByRole('button');

  // const headerButtons = buttons.slice(0, 3);

  // const expectHeadderButtons = ['ABOUT', 'SKILLS', 'WORKS'];

  // let count = 0;
  // for (let button of headerButtons) {
  //   expect(button.outerHTML).toContain(expectHeadderButtons[count]);
  //   count++;
  // }
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
