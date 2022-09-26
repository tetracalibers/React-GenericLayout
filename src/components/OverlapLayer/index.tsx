import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef
} from '@polym/react-props'
import { ElementType, forwardRef, ReactElement } from 'react'
import { UpperAllProps } from './model/upper'
import { Overlay } from './Overlay'
import { OverlayOrigin } from './OverlayOrigin'

type UpperComponent = <As extends ElementType>(
  props: UpperAllProps<As>
) => ReactElement | null

const _Upper = <As extends ElementType>(
  { children, as, ...props }: UpperAllProps<As>,
  ref: PolymorphicRef<As>
) => {
  return (
    <Overlay as={as || 'div'} {...props} ref={ref}>
      {children}
    </Overlay>
  )
}

const Upper: UpperComponent = forwardRef(_Upper)

type RootProps<As extends ElementType> = PolymorphicComponentPropWithRef<As> & {
  children: [ReactElement<any, typeof Upper>, ReactElement]
}

const _OverlapLayer = <As extends ElementType>(
  { children, as, ...props }: RootProps<As>,
  ref: PolymorphicRef<As>
) => {
  return (
    <OverlayOrigin as={as || 'div'} ref={ref} {...props}>
      {children}
    </OverlayOrigin>
  )
}

export const OverlapLayer = {
  Origin: forwardRef(_OverlapLayer),
  Upper
}
