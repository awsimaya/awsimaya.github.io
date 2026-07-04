import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site navigation brand', () => {
  render(<App />);
  const brandLink = screen.getByRole('link', { name: /imaya kumar/i });
  expect(brandLink).toBeInTheDocument();
});
