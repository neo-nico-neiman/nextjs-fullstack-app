import { render, screen } from '@test-utils/test-utils';
import '@testing-library/jest-dom';

import Header from './Header';

describe('Header', () => {
  test('Should match the snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment).toMatchSnapshot();
  });

  test('Should contain links', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /store/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /gmail/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /images/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign in/i })
    ).toBeInTheDocument();
  });
});
