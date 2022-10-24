import { ComponentProps } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'

import {
  ToastContainer,
  StyledToastTitle,
  StyledToastDescription,
  ToastClose,
  ToastViewport,
} from './styles'

import { X } from 'phosphor-react'

export interface ToastProps
  extends ComponentProps<typeof ToastPrimitive.Root> {}

export function Toast({ children }: ToastProps) {
  return (
    <ToastPrimitive.Provider duration={8000}>
      {children}
      <ToastViewport />
    </ToastPrimitive.Provider>
  )
}

export const ToastWrapper = ({ children, ...props }: ToastProps) => {
  return (
    <ToastContainer {...props}>
      {children}

      <ToastClose>
        <X size={20} weight="bold" />
      </ToastClose>
    </ToastContainer>
  )
}

export const ToastTitle = StyledToastTitle
ToastTitle.displayName = 'ToastTitle'

export const ToastDescription = StyledToastDescription
ToastDescription.displayName = 'ToastDescription'
