import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@jfernandes-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
        explicabo similique earum dolor ab molestias sint culpa at pariatur
        voluptatibus, dicta accusantium eveniet quaerat ullam, vero nihil
        expedita consectetur architecto.
      </Text>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
