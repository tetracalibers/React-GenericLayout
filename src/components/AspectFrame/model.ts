import {
  NotRequired,
  getPropType,
  getDefaultProps,
  PolymorphicRef
} from '@polym/react-props'
import { ElementType, ReactNode } from 'react'

const conf = {
  ratioX: NotRequired<number>(16),
  ratioY: NotRequired<number>(9)
}

export type CharacterProps = getPropType<typeof conf>

export type CoreProps<As extends ElementType> = {
  as?: As
  children?: ReactNode
  ref?: PolymorphicRef<As>
}

export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ref: null
}
