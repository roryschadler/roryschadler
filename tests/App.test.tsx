import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('includes name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rory Schadler/i);
  expect(linkElement).toBeInTheDocument();
});
