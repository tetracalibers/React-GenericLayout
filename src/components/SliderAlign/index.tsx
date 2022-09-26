import { ElementType, forwardRef, ReactElement } from 'react'
import { SlideContainer } from './SlideContainer'
import { defaultProps, AllProps } from './model'
import { PolymorphicRef } from '@polym/react-props'

type SliderAlignComponent = <As extends ElementType>(
  props: AllProps<As>
) => ReactElement | null

const _SliderAlign = <As extends ElementType>(
  { as, children, ...props }: AllProps<As> = {
    ...defaultProps
  } as AllProps<As>,
  ref: PolymorphicRef<As>
) => {
  return (
    <SlideContainer {...props} ref={ref} as={as || 'div'}>
      {children}
    </SlideContainer>
  )
}

export const SliderAlign: SliderAlignComponent = forwardRef(_SliderAlign)
