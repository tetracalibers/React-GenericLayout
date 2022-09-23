import {
  CSSt,
  getDefaultProps,
  getPropType,
  NotRequired,
  PolymorphicComponentPropWithRef
} from '@polym/react-props'
import * as CSS from 'csstype'
import { ElementType } from 'react'

const conf = {
  spaceV: NotRequired<number>(0.5),
  spaceU: NotRequired<CSSt.Unit.Length>('rem'),
  barHeightV: NotRequired<number>(1),
  barHeightU: NotRequired<CSSt.Unit.Length>('rem'),
  hideScrollBar: NotRequired<boolean>(false),
  paddingV: NotRequired<number>(0.75),
  paddingU: NotRequired<CSSt.Unit.Length>('rem'),
  // 各項目（子要素）の幅
  itemWidth: NotRequired<CSS.Property.Width>('auto'),
  height: NotRequired<CSS.Property.Height>('auto'),
  barBgColor: NotRequired<CSS.Property.BackgroundColor>('#fff'),
  barColor: NotRequired<CSS.Property.Color>('#B0BEC5')
}

export type CharacterProps = getPropType<typeof conf>

export type CoreProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As>

export type AllProps<As extends ElementType> = CharacterProps & CoreProps<As>

export const defaultProps = getDefaultProps<CharacterProps>(conf)
