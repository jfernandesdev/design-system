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
  decorators: [
    () => {
      return (
        <TooltipComponent>
          <TooltipTrigger asChild>
            <Text>Hover me!</Text>
          </TooltipTrigger>
          <TooltipContent>
            <TooltipArrow />
            <Text>Hello, I am a Tooltip!</Text>
          </TooltipContent>
        </TooltipComponent>
      )
    },
  ],
} as Meta<TooltipProps>

export const Tooltip: StoryObj<TooltipProps> = {}
