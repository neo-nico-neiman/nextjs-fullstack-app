import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Search from './Search';

// Sample this test
test('example', () => {
  render(<Search />);
  expect(screen.queryByText(/Search/i)).toBeInTheDocument();
});