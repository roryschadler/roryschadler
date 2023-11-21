import { render, screen } from '@testing-library/react';

import GitHubButton from '../GitHubButton';

describe('GitHubButton', () => {
  it('renders a link to GitHub', () => {
    render(<GitHubButton />);
    const githubButton = screen.getByRole('link');
    expect(githubButton).toBeInTheDocument();
    expect(githubButton).toHaveAttribute(
      'href',
      expect.stringContaining('https://github.com')
    );
  });

  it('opens the GitHub link in a new tab', () => {
    render(<GitHubButton />);
    const githubButton = screen.getByRole('link');
    expect(githubButton).toHaveAttribute('target', '_blank');
  });

  it('renders the GitHub icon', () => {
    render(<GitHubButton />);
    const githubIcon = screen.getByTestId('GitHubIcon');
    expect(githubIcon).toBeInTheDocument();
  });
});
