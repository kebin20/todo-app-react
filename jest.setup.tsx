import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

declare global {
  namespace NodeJS {
    interface Global {
      fetch: jest.Mock;
    }
  }
}