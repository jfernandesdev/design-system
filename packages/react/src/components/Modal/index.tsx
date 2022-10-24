import { ComponentProps } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import {
  StyledModalWrapper,
  StyledModalOverlay,
  StyledModalContent,
} from './styles'

export interface ModalProps
  extends ComponentProps<typeof DialogPrimitive.Root> {
  overlay?: boolean
}

export function Modal({ children, overlay = true, ...props }: ModalProps) {
  return (
    <DialogPrimitive.Root {...props}>
      {overlay && <StyledModalOverlay />}
      {children}
    </DialogPrimitive.Root>
  )
}

export type ModalWrapperProps = DialogPrimitive.DialogContentProps &
  ComponentProps<typeof StyledModalWrapper> & {
    width?: number
    maintainDimensions?: boolean
  }

export const ModalWrapper = ({
  children,
  width = 700,
  maintainDimensions = false,
  ...props
}: ModalWrapperProps) => {
  return (
    <StyledModalWrapper
      {...props}
      css={{
        $$maxWidth: `${width}px`,

        ...(!maintainDimensions && {
          [`@media(max-width: ${width}px)`]: {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
          },
        }),
      }}
    >
      {children}
    </StyledModalWrapper>
  )
}

export const ModalTrigger = DialogPrimitive.Trigger
ModalTrigger.displayName = 'ModalTrigger'

export const ModalContent = StyledModalContent
ModalContent.displayName = 'ModalContent'
