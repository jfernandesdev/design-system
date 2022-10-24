import { useArgs } from '@storybook/client-api'
import { Meta, StoryObj } from '@storybook/react'
import {
  Modal as ModalComponent,
  ModalProps,
  ModalWrapper,
  ModalTrigger,
  ModalContent,
  Button,
  Heading,
  Text,
} from '@jfernandes-ui/react'

export default {
  title: 'Overlay/Modal',
  component: ModalComponent,
  argTypes: {
    open: { control: 'boolean' },
    overlay: { control: 'boolean' },
    onOpenChange: { control: false },
    defaultOpen: { control: false },
  },
  args: {
    open: false,
    overlay: true,
  },
  decorators: [
    () => {
      const [args, updateArgs] = useArgs()
      return (
        <ModalComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
          <ModalTrigger asChild>
            <Button>Open Modal</Button>
          </ModalTrigger>

          <ModalWrapper>
            <ModalContent>
              <Heading css={{ marginBottom: '$4' }}>Lorem ipsum dolor.</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                ratione ad deserunt saepe explicabo repudiandae ipsum illo
                veritatis. Corporis ab quod, accusamus architecto mollitia
                beatae quam consequatur velit animi id?
              </Text>
            </ModalContent>
          </ModalWrapper>
        </ModalComponent>
      )
    },
  ],
} as Meta<ModalProps>

export const Modal: StoryObj<ModalProps> = {}
