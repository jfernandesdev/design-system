import { styled, keyframes } from '../../styles'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
})

export const StyledTooltipContent = styled(TooltipPrimitive.Content, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$3 $4',
  gap: '$2',
  width: '219px',
  minHeight: '44px',
  color: '$gray100',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  transformOrigin: 'var(--radix-tooltip-content-transform-origin)',
  animation: `${scaleIn} 0.2s ease-out`,
})
