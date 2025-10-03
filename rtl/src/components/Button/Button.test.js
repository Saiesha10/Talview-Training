import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

test('renders button with label', () => {
  render(<Button label="Click Me" />);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});

test('calls onClick when clicked', async () => {
  const handleClick = jest.fn();
  render(<Button label="Click Me" onClick={handleClick} />);
  const button = screen.getByText('Click Me');
  
  await userEvent.click(button); // <-- add await
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('button is disabled', () => {
  render(<Button label="Click Me" disabled />);
  expect(screen.getByText('Click Me')).toBeDisabled();
});
