import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

test('renders input fields', () => {
  render(<LoginForm onSubmit={() => {}} />);
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
});

test('calls onSubmit when form submitted', () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  userEvent.click(screen.getByRole('button', { name: /login/i }));
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
