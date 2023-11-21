import { render, screen } from '@testing-library/react';

import Avatar from '../Avatar';

describe('Avatar', () => {
  it('renders with alt text', () => {
    render(<Avatar />);
    expect(screen.getAllByAltText('Rory Schadler')).toHaveLength(1);
  });
  it('renders a link to my LinkedIn profile', () => {
    render(<Avatar />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      expect.stringContaining('https://www.linkedin.com/')
    );
  });
});
