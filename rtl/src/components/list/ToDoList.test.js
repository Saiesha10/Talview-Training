import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

test('renders items in the list', () => {
  render(<TodoList items={['Buy milk', 'Walk dog']} />);
  expect(screen.getByText('Buy milk')).toBeInTheDocument();
  expect(screen.getByText('Walk dog')).toBeInTheDocument();
});

test('renders no items message', () => {
  render(<TodoList items={[]} />);
  expect(screen.getByText('No items')).toBeInTheDocument();
});
