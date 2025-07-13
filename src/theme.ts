// src/theme.ts
import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'slate',

  colors: {
    slate: [
      '#f2f4f6', // 0 - lightest
      '#d9dde1', // 1
      '#bfc6cd', // 2
      '#a5afb9', // 3
      '#8c98a5', // 4
      '#738191', // 5
      '#5a6a7d', // 6
      '#405369', // 7
      '#253746', // 8 - main brand color
      '#101f29', // 9 - darkest
    ],
  },
});
