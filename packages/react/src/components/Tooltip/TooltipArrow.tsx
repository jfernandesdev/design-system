import { Arrow as ArrowPrimitive } from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'

export interface TooltipArrowProps
  extends ComponentProps<typeof ArrowPrimitive> {
  width?: string
  height?: string
}

export function TooltipArrow({
  width = '16px',
  height = '8px',
  ...props
}: TooltipArrowProps) {
  return (
    <ArrowPrimitive
      width={width}
      height={height}
      style={{ fill: '#121214' }}
      {...props}
    />
  )
}

TooltipArrow.displayName = 'TooltipArrow'
