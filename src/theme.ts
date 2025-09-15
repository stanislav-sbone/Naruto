import { createGlobalStyle } from 'styled-components';

export type AppTheme = {
  name: 'light' | 'dark';
  colors: {
    background: string;
    foreground: string;
  };
};

export const lightTheme: AppTheme = {
  name: 'light',
  colors: {
    background: '#fafafa',
    foreground: '#454545',
  },
};

export const darkTheme: AppTheme = {
  name: 'dark',
  colors: {
    background: '#252525',
    foreground: '#c6c6c6',
  },
};

export const GlobalStyle = createGlobalStyle<{ $theme: AppTheme }>`
  body {
    background-color: ${({ $theme }) => $theme.colors.background};
    color: ${({ $theme }) => $theme.colors.foreground};
  }

  a {
    color: ${({ $theme }) => $theme.colors.foreground};
  }
`;


