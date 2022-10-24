import { styled, keyframes } from '../../styles'
import * as DialogPrimitive from '@radix-ui/react-dialog'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const overlayHide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const contentShow = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate3d(-50%, calc(-50% + 20px), 0) scale(.96)',
  },
  '100%': {
    opacity: 1,
    transform: 'translate3d(-50%, -50%, 0) scale(1)',
  },
})

const contentHide = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translate3d(-50%, -50%, 0) scale(1)',
  },
  '100%': {
    opacity: 0,
    transform: 'translate3d(-50%, calc(-50% + 20px), 0) scale(.96)',
  },
})

export const StyledModalOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'rgba(0,0,0,0.9)',
  position: 'fixed',
  inset: 0,
  zIndex: '9995',

  '&[data-state=open]': {
    animation: `${overlayShow} 0.2s ease-in`,
  },
  '&[data-state=closed]': {
    animation: `${overlayHide} 0.3s ease-in`,
  },
})

export const StyledModalWrapper = styled(DialogPrimitive.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backfaceVisibility: 'hidden',
  transform: 'translate3d(-50%, -50%, 0)',
  width: '90vw',
  maxWidth: '$$maxWidth',
  background: '$gray800',
  maxHeight: '90vh',
  overflowY: 'auto',
  zIndex: '9999',
  borderRadius: '$sm',

  '&:focus': {
    outline: 'none',
  },

  '&[data-state=open]': {
    animation: `${contentShow} 0.3s ease-out`,
  },
  '&[data-state=closed]': {
    animation: `${contentHide} 0.2s ease-out`,
  },

  boxShadow: `
    0px 1.8px 2.6px rgba(0,0,0,0.038),
    0px 5px 7.1px rgba(0,0,0,0.057),
    0px 12.1px 17.2px rgba(0,0,0,0.077),
    0px 40px 57px rgba(0,0,0,0.012),
  `,

  '&::-webkit-scrollbar': {
    width: '3px',
    height: 0,
  },

  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray500',
    borderRadius: '10px',
  },
})

export const StyledModalContent = styled('div', {
  padding: '$8',

  '@media(max-width: 768px)': {
    padding: '$5',
  },
})
