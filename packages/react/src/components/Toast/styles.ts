import { styled, keyframes } from '../../styles'
import * as ToastPrimitive from '@radix-ui/react-toast'

import { Heading } from '../Heading'
import { Text } from '../Text'

const VIEWPORT_PADDING = 32

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING})px)` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  outline: 'none',
  zIndex: '99999',
})

export const ToastContainer = styled(ToastPrimitive.Root, {
  background: '$gray800',
  borderRadius: '$sm',
  padding: '$3 $5',
  boxSizing: 'border-box',
  border: '1px solid $gray600',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  width: '360px',
  position: 'relative',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

export const StyledToastTitle = styled(Heading, {
  color: 'white',
  wordWrap: 'break-word',
  width: 'calc(100% - 32px)',

  defaultVariants: {
    size: 'sm',
  },
})

export const StyledToastDescription = styled(Text, {
  color: '$gray200',
  wordWrap: 'break-word',
  width: '100%',

  defaultVariants: {
    size: 'sm',
  },
})

export const ToastClose = styled(ToastPrimitive.Close, {
  position: 'absolute',
  margin: 0,
  padding: 0,
  top: '$4',
  right: '$4',
  width: '$5',
  height: '$5',
  background: 'transparent',
  border: 0,
  color: '$gray200',
  cursor: 'pointer',

  '&:hover': {
    color: '$white',
  },
})
