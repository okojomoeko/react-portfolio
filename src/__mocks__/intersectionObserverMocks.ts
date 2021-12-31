
export const intersectionObserverMock = () => ({
  observe: () => jest.fn(),
  disconnect: () => jest.fn(),
  unobserve: () => jest.fn(),
})


// (global as any).IntersectionObserver = class IntersectionObserver {
//   constructor() {}

//   observe() {
//     return null;
//   }

//   disconnect() {
//     return null;
//   };

//   unobserve() {
//     return null;
//   }
// };
