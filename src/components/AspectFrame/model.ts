import { PolymorphicComponentPropWithRef } from '@polym/react-props'
import { NotRequired, getPropType, getDefaultProps } from '@polym/react-props'
import { ElementType } from 'react'

const conf = {
  ratioX: NotRequired<number>(16),
  ratioY: NotRequired<number>(9)
}

export type CharacterProps = getPropType<typeof conf>

export type CoreProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As>

export type AllProps<As extends ElementType> = CharacterProps & CoreProps<As>

export const defaultProps = getDefaultProps<CharacterProps>(conf)
