import {
  NotRequired,
  CSSt,
  getPropType,
  getDefaultProps,
  PolymorphicComponentPropWithRef
} from '@polym/react-props'
import { ElementType } from 'react'

const conf = {
  fixed: NotRequired<boolean>(false),
  contain: NotRequired<boolean>(true),
  marginV: NotRequired<number>(0),
  marginU: NotRequired<CSSt.Unit.Length>('rem')
}

export type UpperProps = getPropType<typeof conf>

export type UpperCoreProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As>

export type UpperAllProps<As extends ElementType> = UpperProps &
  UpperCoreProps<As>

export const defaultUpperProps = getDefaultProps<UpperProps>(conf)
