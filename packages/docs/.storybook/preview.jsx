import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#202024aa'
      },
      {
        name: 'light',
        value: '#ffffff'
      }
    ]
  },
  docs: {
    theme: themes.dark,
  },
};