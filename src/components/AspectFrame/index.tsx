import { ElementType, forwardRef, ReactElement } from 'react'
import { LayoutContainer } from './LayoutContainer'
import { defaultProps, CoreProps, CharacterProps } from './model'

type AspectFrameComponent = <As extends ElementType>(
  props: CoreProps<As> & CharacterProps
) => ReactElement | null

const _AspectFrame = <As extends ElementType>(
  { as, ref, children, ...props }: CoreProps<As> = {
    ...defaultProps
  }
) => {
  return (
    <LayoutContainer {...props} ref={ref} as={as || 'div'}>
      {children}
    </LayoutContainer>
  )
}

export const AspectFrame: AspectFrameComponent = forwardRef(_AspectFrame)
