import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@jfernandes-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam facilis delectus nam velit voluptates aperiam sapiente? Harum, nostrum? Culpa ab aliquam ipsa omnis aspernatur itaque tempore quod, error ipsum.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the text will always be an tag `p`, but we can change that with the `as` property.',
      },
    },
  },
}
