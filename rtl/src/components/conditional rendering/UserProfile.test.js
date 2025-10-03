import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

test('shows welcome message when user exists', () => {
  render(<UserProfile user={{ name: 'Alice' }} />);
  expect(screen.getByText('Welcome, Alice!')).toBeInTheDocument();
});

test('prompts login when no user', () => {
  render(<UserProfile user={null} />);
  expect(screen.getByText('Please login')).toBeInTheDocument();
});
