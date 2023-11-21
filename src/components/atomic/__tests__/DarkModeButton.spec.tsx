import * as Mui from '@mui/material';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Mock } from 'vitest';

import { ToggleColorModeContext } from 'App';

import DarkModeButton from '../DarkModeButton';

const toggleColorMode = vi.fn();

const ToggleColorModeContextWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ToggleColorModeContext.Provider value={{ toggleColorMode }}>
    {children}
  </ToggleColorModeContext.Provider>
);

const mockUseTheme = (mode: 'light' | 'dark') => ({
  palette: { mode },
  breakpoints: {
    // breakpoint for width < (sm := 600px)
    // required for useMediaQuery in DarkModeButton.tsx
    down: vi.fn().mockReturnValue('@media (max-width: 599px)'),
  },
});

vi.mock('@mui/material', async () => {
  const originalModule = (await vi.importActual('@mui/material')) as typeof Mui;
  return {
    ...originalModule,
    useTheme: vi.fn(),
  };
});

describe('DarkModeButton', () => {
  it('renders the button with the correct tooltip when user prefers dark', () => {
    (Mui.useTheme as Mock).mockReturnValue(mockUseTheme('light'));
    render(<DarkModeButton />, { wrapper: ToggleColorModeContextWrapper });

    const button = screen.getByRole('button');
    const tooltip = screen.getByLabelText('Switch to dark mode');

    expect(button).toBeInTheDocument();
    expect(tooltip).toBeInTheDocument();
  });

  it('renders the button with the correct tooltip when user prefers light', () => {
    (Mui.useTheme as Mock).mockReturnValue(mockUseTheme('dark'));
    render(<DarkModeButton />, { wrapper: ToggleColorModeContextWrapper });

    const button = screen.getByRole('button');
    const tooltip = screen.getByLabelText('Switch to light mode');

    expect(button).toBeInTheDocument();
    expect(tooltip).toBeInTheDocument();
  });

  it('toggles the color mode when clicked', async () => {
    const user = userEvent.setup();
    render(<DarkModeButton />, { wrapper: ToggleColorModeContextWrapper });

    const button = screen.getByRole('button');
    await user.click(button);

    expect(toggleColorMode).toHaveBeenCalledTimes(1);
  });
});
