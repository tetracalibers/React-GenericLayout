import {
  CSSt,
  getDefaultProps,
  getPropType,
  NotRequired
} from '@polym/react-props'

const conf = {
  // テキストも中央揃えにするか
  textCenter: NotRequired<boolean>(false),
  // 子要素をそのコンテンツ幅に基づいて中央揃えにさせるか
  byContentWidth: NotRequired<boolean>(false),
  paddingXV: NotRequired<number>(0),
  paddingXU: NotRequired<CSSt.Unit.Length>('rem'),
  maxWidthV: NotRequired<number>(60),
  maxWidthU: NotRequired<CSSt.Unit.Length>('rem')
}

export type CharacterProps = getPropType<typeof conf>

export const defaultProps = getDefaultProps<CharacterProps>(conf)
