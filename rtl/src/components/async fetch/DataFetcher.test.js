import { render, screen } from '@testing-library/react';
import DataFetcher from './DataFetcher';

test('shows loading initially and then data', async () => {
  render(<DataFetcher />);
  
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  
  const fetched = await screen.findByText('Fetched data');
  expect(fetched).toBeInTheDocument();
});
