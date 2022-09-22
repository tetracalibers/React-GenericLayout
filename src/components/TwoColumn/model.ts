import {
  CSSt,
  getDefaultProps,
  getPropType,
  NotRequired,
  PolymorphicComponentPropWithRef
} from '@polym/react-props'
import { ElementType } from 'react'

export const subOptions = ['first', 'last'] as const
export type Sub = typeof subOptions[number]

const conf = {
  // 2つの子要素のうち、どちらをサイドバーとみなすか
  sub: NotRequired<Sub>('first'),
  // 水平方向配置におけるメインコンテンツの最小幅[%]
  mainMinWidthPercent: NotRequired<number>(60),
  // サイドバーとメインコンテンツとの間の隙間
  gapV: NotRequired<number>(1.7),
  gapU: NotRequired<CSSt.Unit.Length>('rem'),
  // 垂直方向配置におけるサイドバーの最大幅
  subMaxWidthV: NotRequired<number>(15),
  subMaxWidthU: NotRequired<CSSt.Unit.Length>('rem'),
  // falseにすると、垂直方向配置において、要素の高さが引き伸ばされず本来の高さで表示される
  stretchHeight: NotRequired<boolean>(true)
}

export type CharacterProps = getPropType<typeof conf>

export type CoreProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As>

export type AllProps<As extends ElementType> = CharacterProps & CoreProps<As>

export const defaultProps = getDefaultProps<CharacterProps>
