import { render, screen } from '@testing-library/react';

import LinkedInButton from '../LinkedInButton';

describe('LinkedInButton', () => {
  it('renders a link to LinkedIn', () => {
    render(<LinkedInButton />);
    const linkedinButton = screen.getByRole('link');
    expect(linkedinButton).toBeInTheDocument();
    expect(linkedinButton).toHaveAttribute(
      'href',
      expect.stringContaining('https://www.linkedin.com')
    );
  });

  it('opens the LinkedIn link in a new tab', () => {
    render(<LinkedInButton />);
    const linkedinButton = screen.getByRole('link');
    expect(linkedinButton).toHaveAttribute('target', '_blank');
  });

  it('renders the LinkedIn icon', () => {
    render(<LinkedInButton />);
    const linkedinIcon = screen.getByTestId('LinkedInIcon');
    expect(linkedinIcon).toBeInTheDocument();
  });
});
