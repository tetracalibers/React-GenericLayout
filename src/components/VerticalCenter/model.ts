import {
  CSSt,
  getDefaultProps,
  getPropType,
  NotRequired,
  PolymorphicComponentPropWithRef
} from '@polym/react-props'
import { ElementType } from 'react'

const conf = {
  spaceV: NotRequired<number>(1),
  spaceU: NotRequired<CSSt.Unit.Length>('rem'),
  paddingV: NotRequired<number>(1),
  paddingU: NotRequired<CSSt.Unit.Length>('rem'),
  minHeightV: NotRequired<number>(100),
  minHeightU: NotRequired<CSSt.Unit.Length>('vh'),
  central: NotRequired<number>(1)
}

export type CharacterProps = getPropType<typeof conf>

export type CoreProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As>

export type AllProps<As extends ElementType> = CharacterProps & CoreProps<As>

export const defaultProps = getDefaultProps<CharacterProps>(conf)
