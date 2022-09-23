import {
  NotRequired,
  CSSt,
  getPropType,
  getDefaultProps,
  PolymorphicComponentPropWithRef
} from '@polym/react-props'
import { ElementType } from 'react'

const conf = {
  columnMinWidthV: NotRequired<number>(250),
  columnMinWidthU: NotRequired<CSSt.Unit.Length>('px'),
  spaceV: NotRequired<number>(1),
  spaceU: NotRequired<CSSt.Unit.Length>('rem')
}

export type CharacterProps = getPropType<typeof conf>

export type CoreProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As>

export type AllProps<As extends ElementType> = CharacterProps & CoreProps<As>

export const defaultProps = getDefaultProps<CharacterProps>(conf)
