import { useArgs } from '@storybook/client-api'
import { Meta, StoryObj } from '@storybook/react'

import {
  Text,
  Tooltip as TooltipComponent,
  TooltipArrow,
  TooltipTrigger,
  TooltipContent,
  TooltipProps,
} from '@jfernandes-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: TooltipComponent,
  argTypes: {
    open: { control: 'boolean' },
  },
  args: {
    open: false,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget mi eu justo imperdiet congue id eu orci.',
  },
  decorators: [
    () => {
      const [args, updateArgs] = useArgs()

      return (
        <TooltipComponent
          {...args}
          onOpenChange={(open) => updateArgs({ open })}
        >
          <TooltipTrigger asChild>
            <Text>Hover me!</Text>
          </TooltipTrigger>
          <TooltipContent>
            <TooltipArrow />
            <Text size="sm">{args.children}</Text>
          </TooltipContent>
        </TooltipComponent>
      )
    },
  ],
} as Meta<TooltipProps>

export const Tooltip: StoryObj<TooltipProps> = {}
