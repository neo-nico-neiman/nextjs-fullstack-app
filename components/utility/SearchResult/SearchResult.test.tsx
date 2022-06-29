import { render, screen } from '@test-utils/test-utils';
import '@testing-library/jest-dom';

import SearchResult from './SearchResult';
import { mockSearchResultProps } from './SearchResult.mocks';

describe('Footer', () => {
  test('Should match the snapshot', () => {
    const { asFragment } = render(
      <SearchResult {...mockSearchResultProps.base} />
    );
    expect(asFragment).toMatchSnapshot();
  });

  test('Should have a description of the url as a link', () => {
    render(<SearchResult {...mockSearchResultProps.base} />);
    expect(
      screen.getByText('https://www.google.com').closest('a')
    ).toHaveAttribute('href', 'https://www.google.com');
  });

  test('Should have a title as a link', () => {
    render(<SearchResult {...mockSearchResultProps.base} />);
    expect(screen.getByText('Google').closest('a')).toHaveAttribute(
      'href',
      'https://www.google.com'
    );
  });

  test('Should include a text description', () => {
    render(<SearchResult {...mockSearchResultProps.base} />);
    expect(screen.getByText('Sample result')).toBeInTheDocument();
  });
});
