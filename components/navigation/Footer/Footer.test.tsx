import { render, screen } from '@test-utils/test-utils';
import '@testing-library/jest-dom';

import Footer from './Footer';

describe('Footer', () => {
  test('Should match the snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment).toMatchSnapshot();
  });

  test('Should contain links', () => {
    render(<Footer />);
    expect(
      screen.getByRole('link', { name: /advertising/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /business/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /how search works/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /privacy/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /terms/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /settings/i })).toBeInTheDocument();
  });
});
