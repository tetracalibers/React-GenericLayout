import {
  NotRequired,
  CSSt,
  getDefaultProps,
  getPropType,
  PolymorphicComponentPropWithRef
} from '@polym/react-props'
import { ElementType } from 'react'

const conf = {
  // 入れ子要素に対しても再帰的にmargin挿入するか
  recursive: NotRequired<boolean>(false),
  // これより下のボックスをボックス下部にまとめるために隙間を開けるbreak point
  separateFrom: NotRequired<number>(0),
  spaceV: NotRequired<number>(1),
  spaceU: NotRequired<CSSt.Unit.Length>('rem')
}

export type CharacterProps = getPropType<typeof conf>

export type CoreProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As>

export type AllProps<As extends ElementType> = CharacterProps & CoreProps<As>

export const defaultProps = getDefaultProps<CharacterProps>(conf)
