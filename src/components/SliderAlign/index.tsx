import { ElementType, forwardRef, ReactElement } from 'react'
import { SlideContainer } from './SlideContainer'
import { defaultProps, AllProps } from './model'

type SliderAlignComponent = <As extends ElementType>(
  props: AllProps<As>
) => ReactElement | null

const _SliderAlign = <As extends ElementType>(
  { ref, as, children, ...props }: AllProps<As> = {
    ...defaultProps
  } as AllProps<As>
) => {
  return (
    <SlideContainer {...props} ref={ref} as={as || 'div'}>
      {children}
    </SlideContainer>
  )
}

export const SliderAlign: SliderAlignComponent = forwardRef(_SliderAlign)
