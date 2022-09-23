import { ElementType, forwardRef, ReactElement } from 'react'
import { LayoutContainer } from './LayoutContainer'
import { defaultProps, AllProps } from './model'

type GridComponent = <As extends ElementType>(
  props: AllProps<As>
) => ReactElement | null

const _Grid = <As extends ElementType>(
  { ref, as, children, ...props }: AllProps<As> = {
    ...defaultProps
  } as AllProps<As>
) => {
  return (
    <LayoutContainer {...props} ref={ref} as={as || 'div'}>
      {children}
    </LayoutContainer>
  )
}

export const Grid: GridComponent = forwardRef(_Grid)
