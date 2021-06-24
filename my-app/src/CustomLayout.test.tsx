import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomLayout from './CustomLayout';

test('renders learn react link', () => {
  render(<CustomLayout />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
