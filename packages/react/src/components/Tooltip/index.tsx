import { ComponentProps } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { StyledTooltipContent } from './styles'

export * from './TooltipArrow'

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {
  delay?: number
  skipDelayDuration?: number
}

export function Tooltip({
  children,
  delayDuration = 300,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration} {...props}>
      <TooltipPrimitive.Root>{children}</TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
Tooltip.displayName = 'Tooltip'

export const TooltipTrigger = TooltipPrimitive.Trigger
TooltipTrigger.displayName = 'TooltipTrigger'

export const TooltipContent = StyledTooltipContent
TooltipContent.displayName = 'TooltipContent'
