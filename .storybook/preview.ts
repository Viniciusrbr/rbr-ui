import type { Preview, ReactRenderer } from '@storybook/react-vite'
import '../src/index.css'
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],
};

export default preview;