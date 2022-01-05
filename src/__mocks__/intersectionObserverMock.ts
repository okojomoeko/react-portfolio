export const intersectionObserverMock = () => ({
  observe: () => jest.fn(),
  disconnect: () => jest.fn(),
  unobserve: () => jest.fn(),
});
