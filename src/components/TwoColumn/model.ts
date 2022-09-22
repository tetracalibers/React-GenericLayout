import {
  CSSt,
  getDefaultProps,
  getPropType,
  NotRequired,
  PolymorphicComponentPropWithRef
} from '@polym/react-props'
import { ElementType } from 'react'

export const subColumnOptions = ['first', 'last'] as const
export type SubColumn = typeof subColumnOptions[number]

const conf = {
  // 2つの子要素のうち、どちらをサイドバーとみなすか
  subColumn: NotRequired<SubColumn>('first'),
  // 水平方向配置におけるメインコンテンツの最小幅[%]
  mainMinWidthPer: NotRequired<number>(60),
  // サイドバーとメインコンテンツとの間の隙間
  gapV: NotRequired<number>(1.7),
  gapU: NotRequired<CSSt.Unit.Length>('rem'),
  // 垂直方向配置におけるサイドバーの最大幅
  subMaxWidthV: NotRequired<number>(15),
  subMaxWidthU: NotRequired<CSSt.Unit.Length>('rem'),
  // trueにすると、垂直方向配置において、要素の高さが引き伸ばされず本来の高さで表示される
  noStretchHeight: NotRequired<boolean>(false)
}

export type CharacterProps = getPropType<typeof conf>

export type CoreProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As>

export type AllProps<As extends ElementType> = CharacterProps & CoreProps<As>

export const defaultProps = getDefaultProps<CharacterProps>
