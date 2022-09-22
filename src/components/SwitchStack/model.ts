import {
  CSSt,
  getDefaultProps,
  getPropType,
  NotRequired,
  PolymorphicComponentPropWithRef
} from '@polym/react-props'
import { ElementType } from 'react'

const conf = {
  // 水平方向レイアウトで並ぶことができる最大の項目数
  limit: NotRequired<number>(4),
  // Box間の間隔
  spaceV: NotRequired<number>(1.7),
  spaceU: NotRequired<CSSt.Unit.Length>('rem'),
  // コンテナのブレイクポイント
  breakpointV: NotRequired<number>(30),
  breakpointU: NotRequired<CSSt.Unit.Length>('rem')
}

export type CharacterProps = getPropType<typeof conf>

export type CoreProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As>

export type AllProps<As extends ElementType> = CharacterProps & CoreProps<As>

export const defaultProps = getDefaultProps<CharacterProps>(conf)
