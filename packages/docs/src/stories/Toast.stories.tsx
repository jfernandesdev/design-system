import { useArgs } from '@storybook/client-api'
import { Meta, StoryObj } from '@storybook/react'
import {
  Toast as ToastComponent,
  ToastProps,
  ToastWrapper,
  ToastTitle,
  ToastDescription,
  Button,
} from '@jfernandes-ui/react'

export default {
  title: 'Overlay/Toast',
  component: ToastComponent,
  argTypes: {
    open: { control: 'boolean' },
    onOpenChange: { control: false },
    defaultOpen: { control: false },
  },
  args: {
    open: false,
  },
  decorators: [
    () => {
      const [args, updateArgs] = useArgs()

      return (
        <ToastComponent>
          <Button onClick={(open) => updateArgs({ open })}>Open Tost</Button>

          <ToastWrapper {...args} onOpenChange={(open) => updateArgs({ open })}>
            <ToastTitle>Agendamento realizado</ToastTitle>
            <ToastDescription>Quarta, 21 de setembro às 9h</ToastDescription>
          </ToastWrapper>
        </ToastComponent>
      )
    },
  ],
} as Meta<ToastProps>

export const Toast: StoryObj<ToastProps> = {}
