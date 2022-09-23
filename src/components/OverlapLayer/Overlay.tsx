import styled, { css } from 'styled-components'
import { CharacterProps } from './model'

export const Overlay = styled.div<CharacterProps>`
  --position: ${({ fixed }) => (fixed ? 'fixed' : 'absolute')};

  && {
    position: var(--position);
    /* 左上の角が中央になるように配置 */
    top: 50%;
    left: 50%;
    /* 要素の中央がコンテナの中央になるよう修正 */
    transform: translate(-50%, -50%);

    /* はみ出し対策 */
    ${({ contain, marginV, marginU }) =>
      contain &&
      css`
        /* 単位を含めないとcalc関数が無効になってしまう */
        --margin: ${marginV}${marginU};

        /* コンテンツが隠れてしまわないようスクロールバーを提供 */
        overflow: auto;
        /* marginも含めて高さと幅を制限 */
        max-width: calc(100% - var(--margin) * 2);
        max-height: calc(100% - var(--margin) * 2);
      `}
  }
`
