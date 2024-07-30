import React from 'react';
import { render, screen } from '../../test-utils';
import Home from './Home';

test('renders welcome message', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Welcome to Web3NodeProvider/i);
  expect(linkElement).toBeInTheDocument();
});
