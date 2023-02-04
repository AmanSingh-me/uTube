import { extendTheme } from '@chakra-ui/react';

const Theme = extendTheme({
  colors: {
    black: {
      900: '#0f0f0f',
      800: '#070707',
      700: '#121212',
      600: '#181818',
      500: '#3f3f3f',
      400: '#282828',
      300: '#272727',
      200: '#222222',
      100: '00000020',
    },
    white: {
      900: '#d2d2d2',
      800: '#e8e8e8',
    },
    blue: {
      900: '#1c6ce8',
      800: '#3ea6ff',
      100: '#082340',
    },
  },
});

export default Theme;
