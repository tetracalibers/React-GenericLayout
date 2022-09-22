import {
  CSSt,
  getDefaultProps,
  getPropType,
  NotRequired,
  PolymorphicComponentPropWithRef
} from '@polym/react-props'
import { ElementType } from 'react'
import * as CSS from 'csstype'

const conf = {
  spaceV: NotRequired<number>(1),
  spaceU: NotRequired<CSSt.Unit.Length>('rem'),
  justify: NotRequired<CSS.Property.JustifyContent>('flex-start'),
  align: NotRequired<CSS.Property.AlignItems>('flex-start')
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf>

export type CoreProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As>

export type AllProps<As extends ElementType> = CharacterProps & CoreProps<As>

export const defaultProps = getDefaultProps<CharacterProps>(conf)
